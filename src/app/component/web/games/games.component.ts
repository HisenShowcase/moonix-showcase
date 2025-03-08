import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-games',
  standalone: true,
  templateUrl: './games.component.html',
  imports: [CommonModule, NavbarComponent, FooterComponent],
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  rewards = [
    { name: 'Reward 1' },
    { name: 'Reward 2' },
    { name: 'Reward 3' },
    { name: 'Reward 4' },
    { name: 'Reward 5' },
    { name: 'Reward 6' },
    { name: 'Reward 7' },
    { name: 'Reward 8' },
    { name: 'Reward 9' },
    { name: 'Reward 10' }
  ];

  spinTransition = 'none'; // Initial transition state

  startWheel() {
    this.spinTransition = 'none'; // Reset transition
  }

  spinWheel() {
    const initialDelay = 2000; // 2 seconds
    const fastSpinDuration = Math.floor(Math.random() * (7000 - 4000 + 1)) + 4000; // Random between 4 to 7 seconds
    const slowDownDuration = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000; // Random between 2 to 4 seconds

    // Set initial state for the spin
    this.spinTransition = `transform ${initialDelay}ms linear`;

    // Add a timeout to delay the spin
    setTimeout(() => {
      const totalDuration = initialDelay + fastSpinDuration + slowDownDuration;

      this.spinTransition = `transform ${fastSpinDuration}ms cubic-bezier(0.33, 1, 0.68, 1)`; // Fast spin
      const randomDegree = Math.floor(Math.random() * 360) + 720; // Random degree to spin (minimum two full rotations)

      // Spin the wheel
      const wheel = document.getElementById('wheel');
      if (wheel) {
        wheel.style.transform = `rotate(${randomDegree}deg)`;
      }

      // Slow down the spin
      setTimeout(() => {
        this.spinTransition = `transform ${slowDownDuration}ms ease-out`; // Slow down transition
        if (wheel) {
          wheel.style.transform += ` rotate(${randomDegree}deg)`; // Continue rotating to maintain the position
        }

        // Show result for 2 seconds
        setTimeout(() => {
          this.showResult(randomDegree); // Display the result after the spin
        }, 2000);
      }, fastSpinDuration);
    }, initialDelay);
  }

  showResult(degrees: number) {
    // Logic to determine the winning reward based on the rotation
    console.log(`The wheel stopped at: ${degrees % 360} degrees`);
    // Display logic or pop-up can be added here
  }
}
