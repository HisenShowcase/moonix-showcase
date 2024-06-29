import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {AccountService} from "../../../service/account/account.service";
import { sha256 } from 'js-sha256';
import {Account} from "../../../service/account/model/AccountModel";
import {FormsModule, NgModel} from "@angular/forms";
import {AuthService} from "../../../service/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private account: any;

  public playerName: any;
  public password: any;

  public errorMessage: any = null;

  constructor(public modalRef: NgbModal, public router: Router, private authService: AuthService, private accountService: AccountService) {}

  login()
  {
    /*this.accountService.getAccount(this.playerName).subscribe((account) => {
      this.account = account;
      if(this.account.data.auth_data.password_hash == sha256(this.password))
      {
        localStorage.setItem("account", JSON.stringify(this.account));
        this.router.navigate(["/account-panel"]);
      }
      else
      {
        alert("Špatné heslo!");
      }
    },
    (error) => {
      console.log("CHYBA!");
    });*/

    this.authService.login(this.playerName, sha256(this.password)).subscribe((data) => {
      let token = data.token;

      if(token == null)
      {
        console.log("Token is null..");
        return;
      }

      localStorage.setItem('token', token);

      this.accountService.getAccount(this.playerName).subscribe((account) => {

         this.account = account;
          if(account.data.auth_data.password_hash == sha256(this.password))
          {
            if(account.data.rank != 'owner' && account.data.rank != 'leader' && account.data.rank != 'developer')
            {
              this.errorMessage = 'Panel je dostupný pouze pro dané testery';
              return;
            }
            localStorage.setItem("account", JSON.stringify(account));
            this.modalRef.dismissAll()
            this.router.navigate(["/account-panel"]);
          }
          else
          {
            console.log("Wrong password or username..")
            this.errorMessage = 'Špatné jméno nebo heslo..'
          }
        }, (error) => {
        console.log("Wrong password or username..")
        this.errorMessage = 'Špatné jméno nebo heslo..'
      });
    }, (error) => {
      console.log("Wrong password or username..")
      this.errorMessage = 'Špatné jméno nebo heslo..'
    });
  }
}


