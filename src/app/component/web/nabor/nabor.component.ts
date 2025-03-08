import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-nabor',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './nabor.component.html',
  styleUrl: './nabor.component.css'
})
export class NaborComponent {

  

}
