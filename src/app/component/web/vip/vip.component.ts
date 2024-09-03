import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgIf, NgForOf, CommonModule } from "@angular/common";  // Import CommonModule

@Component({
  selector: 'app-vip',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf,
    NgIf,
    CommonModule  // Add CommonModule to imports
  ],
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent {
  // Define the hex colors for the start and end of each gradient
  moonGradientStart = '#C3C3C3';
  moonGradientEnd = '#838383';
  earthGradientStart = '#277DF0';
  earthGradientEnd = '#00E3C7';
  meteorGradientStart = '#750B0B';
  meteorGradientEnd = '#B82626';
  tigerGradientStart = '#0083FF';
  tigerGradientEnd = '#2E99FF';

  // Existing benefits
  benefits = [
    { name: '/fly (*na Lobby*)', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: '/glow (*na Lobby*)', vip: '✘', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Používání barviček v chatu', vip: '✘', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Speciální role na Discordu', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Přístup do VIP roomky na Discordu', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Prémiové soutěže na Discordu', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Prioritní řešení ticketů', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Celoserverová zpráva při zakoupení', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Celoserverový zvuk při zakoupení', vip: '✘', vipPlus: '✘', mvp: '✔', mvpPlus: '✔' },
    { name: 'Celoserverová animace při zakoupení', vip: '✘', vipPlus: '✘', mvp: '✘', mvpPlus: '✔' },
    { name: 'Permanentní tag', vip: '✘', vipPlus: '✘', mvp: '✔', mvpPlus: '✔' },
  ];

  // New list of benefits for another table
  additionalBenefits = [
    { name: '/kit', vip: '6h (Tier1)', vipPlus: '8h (Tier 2)', mvp: '8h (Tier 3)', mvpPlus: '2h (Tier 3)' },
    { name: '/heal', vip: '1h', vipPlus: '30min', mvp: '20min', mvpPlus: '15min' },
    { name: '/feed', vip: '20min', vipPlus: '10min', mvp: '3min', mvpPlus: '3min' },
    { name: '/ec', vip: '✘', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Přidání levelů', vip: '+35 Levelů', vipPlus: '+75 Levelů', mvp: '+100 Levelů', mvpPlus: '+150 Levelů' },
    { name: 'Větší zisk u Kinga', vip: '+25%', vipPlus: '+50%', mvp: '+100%', mvpPlus: '+100%' },
    { name: 'Speciální VIP zóna', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Používání emoji v chatu', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Možnost si dát papouška na rameno', vip: '✔', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Extra úlomky z Piňaty a Vote', vip: '✘', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Používání barviček', vip: '✘', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Zvuk při napojení', vip: '✘', vipPlus: '✘', mvp: '✔', mvpPlus: '✔' },
    { name: 'Šance na uchování XP při smrti', vip: '✘', vipPlus: '✘', mvp: '50%', mvpPlus: '50%' },
    { name: 'Větší kapacita EXP Úschovny', vip: '+40 Levelů', vipPlus: '+100 Levelů', mvp: '+250 Levelů', mvpPlus: '+320 Levelů' },
    { name: 'Odebrání denního limitu toček na ruletě', vip: '✘', vipPlus: '✔', mvp: '✔', mvpPlus: '✔' },
    { name: 'Neomezený limit sázky EXP na ruletě', vip: '✘', vipPlus: '✘', mvp: '✘', mvpPlus: '✔' },
    { name: 'Zahrnutý BoxPass+', vip: '✘', vipPlus: '✘', mvp: '✘', mvpPlus: '✔' }

  ];

  // Method to generate gradient CSS
  getGradient(startColor: string, endColor: string): string {
    return `linear-gradient(to right, ${startColor}, ${endColor})`;
  }
}