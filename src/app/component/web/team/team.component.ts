import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgIf, NgForOf } from "@angular/common";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgIf,
    NgForOf,
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, AfterViewInit {
  constructor(private modalService: NgbModal, private router: Router, private el: ElementRef) {}

  ngOnInit() {
    // Any additional setup if needed
  }

  ngAfterViewInit() {
    const options = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          entry.target.classList.remove('slide-out');
        } else {
          entry.target.classList.remove('slide-in');
          entry.target.classList.add('slide-out');
        }
      });
    }, options);

    // Select elements to observe
    const cards = this.el.nativeElement.querySelectorAll('.team-card');
    const titles = this.el.nativeElement.querySelectorAll('.team-title, .admin-leaders-title, .developers-title, .helpers-title, .builders-title, .youtubers-title');

    // Observe each element
    cards.forEach((card: Element) => observer.observe(card));
    titles.forEach((title: Element) => observer.observe(title));
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.result.then((result) => {
      console.log('Modal closed with:', result);
    }).catch((error) => {
      console.error('Modal dismissed with:', error);
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
