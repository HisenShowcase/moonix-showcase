import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { NavbarComponent } from '../../web/navbar/navbar.component';
import { FooterComponent } from '../../web/footer/footer.component';

@Component({
  selector: 'app-account-panel',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIf,
    NgForOf,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './account-panel.component.html',
  styleUrls: ['./account-panel.component.css']
})
export class AccountPanelComponent implements OnInit {
  
  // 🔹 MODIFY THESE VALUES TO CHANGE ACCOUNT DETAILS 🔹
  account = {
    data: {
      id: { username: "H1senk0" }, // Change username
      auth_data: {
        registration_time: 1672531200, // Example timestamp
        lastlogin_time: 1704067200,    // Example timestamp
        autologin: true // Auto-login status
      },
      rank: "owner", // Default rank
      temprank: "vip", // Temporary rank (set to "player" if none)
      rank_since: 1710000000, // Rank expiration timestamp (set 0 if permanent)
      tokens: 162, // Number of tokens
      client_data: {
        last_address: "192.174.2.8" // User's last IP address
      },
      punishment_data: {
        reason: null, // Example: "Spamming"
        type: [], // Example: ["ban"]
        toTime: [] // Example: [1710000000]
      },
      boxfight_data: {
        evolution: 3, // Evolution level (1-5)
        experience_storage: 120, // Stored experience levels
        clanName: "Warriors", // Clan name ("null" if no clan)
        afkSeconds: 3600, // AFK access (set 0 for none)
        afkPlusSeconds: 0, // AFK+ access (set 0 for none)
        xpDrillST: 5 // Drill storage level
      },
      survival_data: {
        money: 1000, // Gold coins
        cookies: 50, // Cookies
        evoluce: 2, // Evolution level
        krystalova_seconds: 7200, // Access to Crystal Zone (set 0 for none)
        stokova_seconds: 0, // Access to Sewer Zone (set 0 for none)
        money_spent: 500 // Spent gold coins
      }
    }
  };

  playerSkinUrl: string;
  showIp: boolean = false;
  registrationDate: string;
  lastLoginDate: string;
  punishmentTime: number = -1;
  currentTab: string = 'boxFight'; // Initial tab

  constructor(public router: Router) {
    // 🔹 Set player skin (change username if needed)
    this.playerSkinUrl = `https://mineskin.eu/armor/bust/${this.account.data.id.username}/100.png`;

    // 🔹 Convert timestamps to readable date format
    this.registrationDate = this.formatDate(this.account.data.auth_data.registration_time);
    this.lastLoginDate = this.formatDate(this.account.data.auth_data.lastlogin_time);
  }

  ngOnInit() {
    console.log("Account Panel Loaded for user:", this.account.data.id.username);
  }

  toggleIpVisibility() {
    this.showIp = !this.showIp;
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('cs-CZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  formatBanDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('cs-CZ', {
      month: '2-digit',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  capitalizeFirstLetter(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  nextTab() {
    this.currentTab = this.currentTab === 'boxFight' ? 'survival' : 'boxFight';
  }

  previousTab() {
    this.currentTab = this.currentTab === 'boxFight' ? 'survival' : 'boxFight';
  }
}
