import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { ProductDescComponent } from '../product-desc/product-desc.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { PaypalModuleComponent } from '../paypal-module/paypal-module.component';

interface Category {
  id: number;
  name: string;
  icon: string;
  subcategories: { id: number; name: string }[];
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number | null;
  description: string;
  categoryId: number;
  subcategoryId: number;
  sale_percentage?: number;
  sale_price?: number;
  displayPrice?: string;
}

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, ToastrModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  categories: Category[] = [
    { id: 1, name: 'VIP', icon: 'fa-solid fa-star', subcategories: [{ id: 101, name: '30 Dní' }, { id: 102, name: 'Napořád' }] },
    { id: 2, name: 'ElytraWars', icon: 'fa-solid fa-rocket', subcategories: [{ id: 201, name: 'Zóny' }, { id: 202, name: 'Prémiové Klíče' }, { id: 203, name: 'Ostatní' }] },
    { id: 3, name: 'Magma', icon: 'fa-solid fa-fire', subcategories: [{ id: 301, name: 'Prémiové Klíče' }, { id: 302, name: 'Zóny' }] },
    { id: 4, name: 'Ostatní', icon: 'fa-solid fa-recycle', subcategories: [{ id: 401, name: 'Tokeny' }, { id: 402, name: 'Unbany' }] }
  ];

  products: Product[] = [
    { id: 1, name: 'Horbní Klíč (1x)', imageUrl: 'https://i.imgur.com/G9fDnpp.png', originalPrice: 19.90, description: 'Popisek', categoryId: 2, subcategoryId: 202 },
    { id: 2, name: 'Nebeský Klíč (3x)', imageUrl: 'https://i.imgur.com/92PuqYY.png', originalPrice: 29.90, description: 'Popisek', categoryId: 2, subcategoryId: 202 },
    { id: 3, name: 'VIP - Nebeské (30 Dní)', imageUrl: 'https://i.imgur.com/92PuqYY.png', originalPrice: 39.90, description: 'Popisek', categoryId: 1, subcategoryId: 101 },
    { id: 3, name: 'VIP - Nebeské (Napořád)', imageUrl: 'https://i.imgur.com/92PuqYY.png', originalPrice: 39.90, description: 'Popisek', categoryId: 1, subcategoryId: 102 },

  ];

  selectedCategoryId: number | null = null;
  selectedSubcategoryId: number | null = null;
  serverSale: number | null = 0;

  cart: { product: Product, quantity: number }[] = [];
  totalPrice: number = 0;

  lastPurchase: { username: string; amount: number } | null = null;


  constructor(private modalService: NgbModal, private router: Router, private toastr: ToastrService) {
    this.loadCartFromLocalStorage();
  }

  isLogged(): boolean {
    return !!localStorage.getItem('account');
  }

  selectCategory(categoryId: number) {
    if (this.selectedCategoryId !== categoryId) {
      this.selectedCategoryId = categoryId;
      this.selectedSubcategoryId = null;
    }
    console.log("Category selected:", this.selectedCategoryId);
  }
  
  selectSubcategory(subcategoryId: number) {
    this.selectedSubcategoryId = subcategoryId;
    console.log("Subcategory selected:", this.selectedSubcategoryId);
    console.log("Filtered products:", this.getFilteredProducts());
  }

  getFilteredProducts(): Product[] {
    if (this.selectedSubcategoryId === null) {
      return [];
    }
  
    return this.products
      .filter(product => product.categoryId === this.selectedCategoryId && product.subcategoryId === this.selectedSubcategoryId)
      .map(product => {
        let finalPrice: number = product.originalPrice ?? 0;
        let strikethroughPrice: number | null = null;

        if (product.sale_price !== undefined) {
          finalPrice = product.sale_price;
          strikethroughPrice = product.originalPrice;
        } else if (product.sale_percentage !== undefined) {
          finalPrice = (product.originalPrice ?? 0) * (1 - product.sale_percentage / 100);
          strikethroughPrice = product.originalPrice;
        } else if (this.serverSale !== null) {
          finalPrice = (product.originalPrice ?? 0) * (1 - this.serverSale / 100);
          strikethroughPrice = product.originalPrice;
        }

        if (strikethroughPrice === finalPrice) {
          strikethroughPrice = null;
        }

        return {
          ...product,
          displayPrice: finalPrice.toFixed(2),
          originalPrice: strikethroughPrice
        };
      });
  }

  openProductModal(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      let finalPrice: number = product.originalPrice ?? 0;
      let displayPrice: string = finalPrice.toFixed(2);
      
      if (product.sale_price !== undefined) {
        displayPrice = product.sale_price.toFixed(2);
      } else if (product.sale_percentage !== undefined) {
        finalPrice = (product.originalPrice ?? 0) * (1 - product.sale_percentage / 100);
        displayPrice = finalPrice.toFixed(2);
      } else if (this.serverSale !== null) {
        finalPrice = (product.originalPrice ?? 0) * (1 - this.serverSale / 100);
        displayPrice = finalPrice.toFixed(2);
      }

      const modalRef = this.modalService.open(ProductDescComponent);
      modalRef.componentInstance.productName = product.name;
      modalRef.componentInstance.productDesc = product.description;
      modalRef.componentInstance.productPrice = displayPrice;
    }
  }

  addToCart(productId: number) {
    if (!this.isLogged()) {
      this.toastr.error('Musíš být přihlášený', 'Chyba');
      return;
    }

    const product = this.products.find(p => p.id === productId);
    if (product) {
      const cartItem = this.cart.find(item => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
      this.updateTotalPrice();
      this.saveCartToLocalStorage();
      this.toastr.success('Zaplatit můžeš v sekci "Košík"', 'Přidáno do Košíku');
    }
  }

  removeFromCart(productId: number) {
    const itemIndex = this.cart.findIndex(item => item.product.id === productId);
    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
      this.updateTotalPrice();
      this.saveCartToLocalStorage();
      this.toastr.info('Produkt byl odstraněn z košíku', 'Odstraněno');
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.cart.reduce((total, item) => total + (item.product.originalPrice ?? 0) * item.quantity, 0);
  }

  saveCartToLocalStorage() {
    const username = this.getCurrentUsername();
    localStorage.setItem(`cart_${username}`, JSON.stringify(this.cart));
    localStorage.setItem(`totalPrice_${username}`, this.totalPrice.toString());
  }

  loadCartFromLocalStorage() {
    const username = this.getCurrentUsername();
    const storedCart = localStorage.getItem(`cart_${username}`);
    const storedTotalPrice = localStorage.getItem(`totalPrice_${username}`);

    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
    if (storedTotalPrice) {
      this.totalPrice = parseFloat(storedTotalPrice);
    }
  }

  goToCheckoutRedirect() {
    this.router.navigate(['/checkout']);
  }

  clearCart() {
    const username = this.getCurrentUsername();
    this.cart = [];
    this.totalPrice = 0;
    localStorage.removeItem(`cart_${username}`);
    localStorage.removeItem(`totalPrice_${username}`);
  }

  getMinecraftHeadUrl(username: string): string {
    return `https://mineskin.eu/helm/${username}`;
  }

  getCurrentUsername(): string {
    return localStorage.getItem('account') || 'guest';
  }

  calculateTotalPrice(): number {
    return 1234.56;
  }

  
}
