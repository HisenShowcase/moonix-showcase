import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Ensure correct style file path
})
export class NavbarComponent {

  public isVicedropOpen: boolean = false;


  private baseUrl = 'https://moonix.cz';
  public username: string | null = localStorage.getItem("username");

  constructor(private modalService: NgbModal, private router: Router) {}

  openLoginPopup() {
    this.modalService.open(LoginComponent);
  }

  openPanel() {
    this.router.navigate(["/account-panel"]);
  }

  logout() {
    localStorage.removeItem("account");
    localStorage.removeItem("username");
    this.router.navigate([""]);
  }

  isLogged(): boolean {
    return !!localStorage.getItem("account");
  }

  getMinecraftHeadUrl(): string {
    return `https://mineskin.eu/avatar/${this.username}/100.png`;
  }

  navigateTo(path: string) {
    window.location.href = `${this.baseUrl}${path}`;
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }

  toggleVicedrop(isOpen: boolean) {
    this.isVicedropOpen = isOpen;
  }
}

