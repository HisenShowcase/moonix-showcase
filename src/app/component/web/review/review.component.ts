import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../service/review/reviews.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  currentIndex: number = 0; // Index for the current review

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewsService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
        this.setRandomReview(); // Set a random review after loading
      },
      (error) => {
        console.error('Error loading reviews:', error);
      }
    );
  }

  setRandomReview(): void {
    if (this.reviews.length > 0) {
      this.currentIndex = Math.floor(Math.random() * this.reviews.length); // Randomly set the currentIndex
    }
  }

  get currentReview() {
    return this.reviews[this.currentIndex];
  }

  getPlayerAvatar(username: string): string {
    return `https://mineskin.eu/helm/${username}`; // Minecraft head URL
  }

  starsArray(rating: number): number[] {
    return Array(rating).fill(0); // Generates an array for ngFor loop
  }

  nextReview(): void {
    if (this.reviews.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }
  }

  previousReview(): void {
    if (this.reviews.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    }
  }

  averageRating(): number {
    if (this.reviews.length === 0) return 0;
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / this.reviews.length;
  }
}
