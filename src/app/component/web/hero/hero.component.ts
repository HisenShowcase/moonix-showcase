import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import FormsModule to use ngModel
})
export class HeroComponent implements AfterViewInit {
  isCopied = false; // Track whether the IP has been copied
  currentIP = 'play.moonix.cz'; // Default IP address
  selectedVote: string | null = null; // Track selected vote
  minecraftNick = ''; // Track Minecraft Nick

  constructor(private toastr: ToastrService) {} // Inject ToastrService

  ngAfterViewInit(): void {
    this.applyRandomRotations();
  }

  private applyRandomRotations(): void {
    const blocks = document.querySelectorAll('.falling-blocks .block');
    blocks.forEach(block => {
      const randomRotation = Math.floor(Math.random() * 360);
      (block as HTMLElement).style.transform = `rotate(${randomRotation}deg)`;
    });
  }

  ClickToJoin() {
    const ipAddresses = ["play.moonix.cz", "mc.moonix.cz"];
    this.currentIP = this.getRandomIP(ipAddresses);

    this.copyToClipboard(this.currentIP).then(() => {
      this.isCopied = true; // Set copied state to true and keep it
      this.showSuccessToast("IP zkopírována do schránky!"); // Show success toast
    }).catch(err => {
      console.error('Failed to copy IP address:', err);
    });
  }

  private getRandomIP(ipAddresses: string[]): string {
    return ipAddresses[Math.floor(Math.random() * ipAddresses.length)];
  }

  private copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
  }

  private showSuccessToast(message: string): void {
    this.toastr.success(message); // Display toast message
  }

  redirectToDiscord() {
    this.navigateToDiscord();
  }

  private navigateToDiscord(): void {
    window.open('https://discord.moonix.cz', '_blank');  // Open in a new tab
  }

  selectVote(vote: string) {
    this.selectedVote = vote; // Set the selected vote
  }

  submitVote() {
    if (this.minecraftNick.trim()) {
      this.showSuccessToast(`Děkujeme za hlasování, ${this.minecraftNick}!`); // Display success toast
      // Here you would typically send the vote to a server or handle it as needed
    } else {
      this.toastr.error("Prosím zadejte svůj Minecraft Nick."); // Show error toast if no nick is provided
    }
  }
}
