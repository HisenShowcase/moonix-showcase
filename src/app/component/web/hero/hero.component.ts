import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class HeroComponent implements AfterViewInit {
  isCopied = false;
  currentIP = 'play.moonix.cz';
  selectedVote: string | null = null;
  minecraftNick = '';

  constructor(private toastr: ToastrService) {}

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
      this.isCopied = true;
      this.showSuccessToast("IP zkopírována do schránky!");
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
    this.toastr.success(message);
  }

  redirectToDiscord() {
    this.navigateToDiscord();
  }

  private navigateToDiscord(): void {
    window.open('https://discord.moonix.cz', '_blank');
  }

  selectVote(vote: string) {
    this.selectedVote = vote;
  }

  submitVote() {
    if (this.minecraftNick.trim()) {
      this.showSuccessToast(`Děkujeme za hlasování, ${this.minecraftNick}!`);
    } else {
      this.toastr.error("Prosím zadejte svůj Minecraft Nick.");
    }
  }
}
