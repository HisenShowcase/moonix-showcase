import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, of } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GiftCard {
  _id?: string;  // Optional ID, assigned by the database
  type: string;
  uses: number;
  code: string;
  value: number;
}

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  activePanel: string = 'Hlavní Panel';

  playerCount: number | null = null;
  discordMemberCount: number | null = null;
  isDervStreaming: boolean | null = null;
  showGiftCardForm: boolean = false;
  giftCardType: string = 'Procenta';
  giftCardUses: number = 1;
  giftCardCode: string = this.generateRandomCode();
  giftCardValue: number = 0;

  giftCards: GiftCard[] = [];  // Array to store gift cards of type GiftCard

  private apiUrl = 'http://localhost:5000/api/giftcards';  // Update with your API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPanelData(this.activePanel);
    this.loadGiftCardsFromDatabase();
  }

  loadPanelData(panel: string): void {
    this.activePanel = panel;
    if (panel === 'Hlavní Panel') {
      this.fetchMinecraftPlayerCount();
      this.fetchDiscordMemberCount();
      this.fetchYouTubeStreamingStatus();
    }
  }

  private fetchMinecraftPlayerCount(): void {
    interval(30000).pipe(
      startWith(0),
      switchMap(() =>
        this.http.get<any>('https://api.mcsrvstat.us/3/play.moonix.cz').pipe(
          map(response => response.players.online),
          catchError(() => of(null))
        )
      )
    ).subscribe(count => this.playerCount = count);
  }

  private fetchDiscordMemberCount(): void {
    interval(30000).pipe(
      startWith(0),
      switchMap(() =>
        this.http.get<any>('https://discord.com/api/v9/invites/H8fepUeRkZ?with_counts=true').pipe(
          map(response => response.approximate_member_count),
          catchError(() => of(null))
        )
      )
    ).subscribe(count => this.discordMemberCount = count);
  }

  private fetchYouTubeStreamingStatus(): void {
    interval(30000).pipe(
      startWith(0),
      switchMap(() =>
        this.http.get<any>('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            channelId: 'UC72XG3DzXQ3StI19QbKqftg',
            eventType: 'live',
            type: 'video',
            key: 'YOUR_API_KEY'
          }
        }).pipe(
          map(response => {
            console.log("API Response:", response);
            return response.items && response.items.length > 0;
          }),
          catchError(() => of(false))
        )
      )
    ).subscribe(isLive => {
      this.isDervStreaming = isLive;
      console.log("Streaming status:", this.isDervStreaming);
    });
  }

  toggleGiftCardForm(): void {
    this.showGiftCardForm = !this.showGiftCardForm;
  }

  generateGiftCardCode() {
    this.giftCardCode = this.generateRandomCode();
  }

  private generateRandomCode(): string {
    return `${Math.random().toString(36).substr(2, 4).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
  }

  // Load gift cards from the database
  loadGiftCardsFromDatabase(): void {
    this.http.get<GiftCard[]>(this.apiUrl).pipe(
      catchError(err => {
        console.error("Error loading gift cards", err);
        return of([]);
      })
    ).subscribe(giftCards => {
      this.giftCards = giftCards;
    });
  }

  // Create a new gift card and save it to the database
  createGiftCard(): void {
    const newGiftCard: GiftCard = {
      type: this.giftCardType,
      uses: this.giftCardUses,
      code: this.giftCardCode,
      value: this.giftCardValue
    };

    this.http.post<GiftCard>(this.apiUrl, newGiftCard).pipe(
      catchError(err => {
        console.error("Error creating gift card", err);
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.giftCards.push(response);
      }
      this.resetForm();
      this.toggleGiftCardForm();
    });
  }

  // Update a gift card in the database
  updateGiftCard(giftCardId: string, updatedGiftCard: GiftCard): void {
    this.http.put<GiftCard>(`${this.apiUrl}/${giftCardId}`, updatedGiftCard).pipe(
      catchError(err => {
        console.error("Error updating gift card", err);
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        const index = this.giftCards.findIndex(g => g._id === giftCardId);
        if (index !== -1) {
          this.giftCards[index] = response;
        }
      }
    });
  }

  // Delete a gift card from the database
  deleteGiftCard(giftCardId: string): void {
    this.http.delete<GiftCard>(`${this.apiUrl}/${giftCardId}`).pipe(
      catchError(err => {
        console.error("Error deleting gift card", err);
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.giftCards = this.giftCards.filter(g => g._id !== giftCardId);
      }
    });
  }

  private resetForm() {
    this.giftCardType = 'Procenta';
    this.giftCardUses = 1;
    this.giftCardValue = 0;
    this.giftCardCode = this.generateRandomCode();
  }
}
