import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    FormsModule  // Import FormsModule here
  ],
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  nickname: string = '';

  constructor(private router: Router) {}

  openUrl(platform: string) {
    let url = '';

    switch (platform) {
      case 'craftlist':
        url = `https://craftlist.org/moonix?nickname=${encodeURIComponent(this.nickname)}`;
        break;
      case 'minecraft-list':
        url = 'https://www.minecraft-list.cz/server/moonix/vote';
        break;
      case 'minecraftservery':
        url = 'https://minecraftservery.eu/server/moonix';
        break;
    }

    if (url) {
      window.open(url, '_blank');
    }
  }

  openReviewPage() {
    // Replace with the actual URL or route to the review page
    window.open('https://minecraftservery.eu/recenze/moonix', '_blank');
  }
}
