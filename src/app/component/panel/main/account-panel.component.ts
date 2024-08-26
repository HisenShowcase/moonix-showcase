import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../service/account/account.service";
import {Account, defaultAccount} from "../../../service/account/model/account.model";
import {NavbarComponent} from "../../web/navbar/navbar.component";
import {ActivatedRoute, Router} from "@angular/router";
import {routes} from "../../../app.routes";
import {NgForOf, NgIf} from "@angular/common";
import {MineSkinService} from "../../../service/mineskin/mine-skin.service";

@Component({
  selector: 'app-account-panel',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './account-panel.component.html',
  styleUrls: ['./account-panel.component.css']
})
export class AccountPanelComponent implements OnInit {
  account: Account;

  constructor(private route: ActivatedRoute, private accountService: AccountService, private mineSkin: MineSkinService, public router: Router) {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("account"));

    if(this.account == null)
      this.router.navigate([""]);

    mineSkin.getPlayerImage(this.account.data.id.username)
      .subscribe((response) => { var blob = new Blob([response.text()], {type: "image/png"});
        console.log(blob);
        console.log(window.btoa(blob.toString()));
      });
  }

  ngOnInit() {

  }
}
