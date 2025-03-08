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
    // Simulated login under nickname "H1senk0"
    this.playerName = "H1senk0";  
  
    // Store username in localStorage
    localStorage.setItem("username", this.playerName);
  
    // Set a dummy token to prevent authentication issues
    localStorage.setItem("token", "dummy_token");
  
    // Simulated account data to avoid errors when fetching from accountService
    const account = {
      data: {
        auth_data: {
          password_hash: sha256("dummy_password") 
        },
        username: "H1senk0",
        email: "ficnarnicolas@gmail.com",
        role: "user"
      }
    };
  
    // Store account details
    localStorage.setItem("account", JSON.stringify(account));
  
    // Debugging logs
    console.log("Stored username:", localStorage.getItem("username"));
    console.log("Stored token:", localStorage.getItem("token"));
    console.log("Stored account:", localStorage.getItem("account"));
  
    // Close modal if applicable
    this.modalRef.dismissAll();
  
    // Navigate to account panel
    this.router.navigate(["moonix-showcase/account-panel"]).then(() => {
      // Wait 0.5s before refreshing the page
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }).catch((err) => {
      console.error("Navigation error:", err);
    });
  }  
  
}
