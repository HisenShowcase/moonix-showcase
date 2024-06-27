import { Component } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private modalService: NgbModal, private router: Router) {
  }

  openLoginPopup()
  {
    this.modalService.open(LoginComponent)
  }

  openPanel()
  {
    this.router.navigate(["/account-panel"]);
  }

  logout()
  {
    localStorage.removeItem("account");
    this.router.navigate([""]);
  }


  isLogged(): boolean
  {
    return !!localStorage.getItem("account");
  }


}
