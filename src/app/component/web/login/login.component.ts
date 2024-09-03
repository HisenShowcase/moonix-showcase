import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { AccountService } from "../../../service/account/account.service";
import { sha256 } from 'js-sha256';
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../../service/auth/auth.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public playerName: string = '';
  public password: string = '';

  public errorMessage: string | null = null;

  constructor(public modalRef: NgbModal, public router: Router, private authService: AuthService, private accountService: AccountService) {}

  login() {
    this.authService.login(this.playerName, sha256(this.password)).subscribe((data) => {
      let token = data.token;

      if (!token) {
        this.errorMessage = 'Token is null.';
        return;
      }

      localStorage.setItem('token', token);

      this.accountService.getAccount(this.playerName).subscribe((account) => {
        if (account.data.auth_data.password_hash === sha256(this.password)) {
          localStorage.setItem("account", JSON.stringify(account));
          this.modalRef.dismissAll();
          this.router.navigate(["/account-panel"]);
        } else {
          this.errorMessage = 'Špatné jméno nebo heslo.';
        }
      }, () => {
        this.errorMessage = 'Špatné jméno nebo heslo.';
      });
    }, () => {
      this.errorMessage = 'Špatné jméno nebo heslo.';
    });
  }
}
