import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../service/auth/auth.service';
import { AccountService } from '../../../service/account/account.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-desc',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ToastrModule
  ],  templateUrl: './product-desc.component.html',
  styleUrl: './product-desc.component.css'
})
export class ProductDescComponent {

  constructor(public modalRef: NgbModal, public router: Router, private authService: AuthService, private accountService: AccountService, private toastr: ToastrService) {}

  
  @Input() productName!: string;
  @Input() productDesc!: string;
  @Input() productPrice!: number;

  isLogged(): boolean {
    return !!localStorage.getItem('account');
  }

  addToCart(productId: number) {
    if (this.isLogged()) {
      this.toastr.success('Zaplatit můžeš v sekci "Košík"', 'Přidáno do Košíku');
    } else {
      this.toastr.error('Musíš být přihlášený', 'Chyba');
    }
  }
}
