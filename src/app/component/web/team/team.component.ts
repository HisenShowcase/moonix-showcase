import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import { NgIf } from "@angular/common";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf,
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
    constructor() {

    }

    ngOnInit() {
    }

}