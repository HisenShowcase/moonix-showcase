import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { AccountService } from '../../../service/account/account.service';
import { MineSkinService } from '../../../service/mineskin/mine-skin.service';
import { Account } from '../../../service/account/model/account.model';
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
  account: Account;
  playerSkinUrl: string;
  showIp: boolean = false;
  registrationDate: string;
  lastLoginDate: string;
  punishmentTime: number = -1;
  currentTab: string = 'boxFight'; // Initial tab

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private mineSkin: MineSkinService,
    public router: Router
  ) {
    // Get account data from local storage
    this.account = JSON.parse(localStorage.getItem('account') as string);

    // Redirect if account is null
    if (this.account == null) {
      this.router.navigate(['']);
    }

    // Default player skin URL
    this.playerSkinUrl = `https://mineskin.eu/armor/bust/${this.account.data.id.username}/100.png`;

    // Fetch the player's actual skin image
    this.mineSkin.getPlayerImage(this.account.data.id.username)
      .subscribe(
        response => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            this.playerSkinUrl = base64data as string;
          };
          reader.readAsDataURL(new Blob([response], { type: 'image/png' }));
        },
        error => {
          console.error('Error fetching player skin:', error);
          // Fallback to default skin or handle the error as needed
        }
      );

    // Convert timestamps to Czech date format
    this.registrationDate = this.formatDate(this.account.data.auth_data.registration_time);
    this.lastLoginDate = this.formatDate(this.account.data.auth_data.lastlogin_time);
  }

  ngOnInit() {
    this.lastLoginDate = this.formatDate(this.account.data.auth_data.lastlogin_time);
    this.accountService.getAccount(this.account.data.id.username).subscribe(account => {
      this.account = account;

      console.log("Kontroluji account..");

      if(account.data.punishment_data.reason == null)
        return;

      for (let i = 0; i < account.data.punishment_data.reason.length; i++) {
        const type = account.data.punishment_data.type[i].trim().toLocaleLowerCase();
        
        if(type != "ban" && type != "ipban")
          continue;

        const toTime = Number(account.data.punishment_data.toTime[i]); // Assuming toTime is in a recognizable Date format

        if(toTime < Date.now())
          continue;
        
        this.punishmentTime = toTime;

        if(this.punishmentTime != -1)
          break;
      }
    });
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
