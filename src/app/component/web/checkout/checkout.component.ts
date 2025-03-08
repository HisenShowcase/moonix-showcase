import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';
import { PaypalModuleComponent } from '../paypal-module/paypal-module.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaysafeModuleComponent } from '../paysafe-module/paysafe-module.component';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule, NgxPayPalModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isOtherPlayer: boolean = false;
  products: { name: string; pricePerItem: number; quantity: number; totalPrice: number }[] = [];
  totalAmount: number = 0;
  decimalPipe: any;
  paypalFeePercentage: number = 3;

  selectedPaymentGateway: string = '';
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadCartFromLocalStorage();
    this.calculateTotalAmount();
  }

  loadCartFromLocalStorage() {
    const username = this.getCurrentUsername();
    const storedCart = localStorage.getItem(`cart_${username}`);
  
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      this.products = cartItems.map((item: { product: { name: string; originalPrice: number }; quantity: number }) => ({
        name: item.product.name,
        pricePerItem: item.product.originalPrice ?? 0,
        quantity: item.quantity,
        totalPrice: (item.product.originalPrice ?? 0) * item.quantity
      }));
    } else {
      console.warn("No items found in cart for the user:", username);
    }
  }

  calculateTotalAmount() {
    this.totalAmount = this.products.reduce((total, item) => total + item.totalPrice, 0);
  }

  getTotalAmountWithFee(): number {
    const totalWithFee = this.totalAmount * (1 + this.paypalFeePercentage / 100);
    return parseFloat(totalWithFee.toFixed(2));
  }

  getCurrentUsername(): string {
    return localStorage.getItem('account') || 'guest';
  }

  goToCheckout() {
    const selectedPaymentMethod = 'paypal';
  
    if (selectedPaymentMethod === 'paypal') {
      this.openPaypalModal();
    } else if (selectedPaymentMethod === 'paypal') {
      
    }
  }
  
  openPaypalModal() {
    const modalRef = this.modalService.open(PaypalModuleComponent, { centered: true });
    modalRef.componentInstance.totalAmount = this.totalAmount;
    modalRef.componentInstance.products = this.products;
  }

  openPaySafeModal() {
    const modalRef = this.modalService.open(PaysafeModuleComponent, { centered: true });
  }
  

  get formattedTotalAmount(): number {
    return this.totalAmount;
}

}

