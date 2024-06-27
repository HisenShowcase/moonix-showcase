import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  providers: [
    { provide: ToastrService, useClass: ToastrService },
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private toastr: ToastrService) { }


  ClickToJoin()
  {
    navigator.clipboard.writeText("play.moonix.cz");
    this.toastr.success("IP Zkopírovaná", "play.moonix.cz")
  }
}
