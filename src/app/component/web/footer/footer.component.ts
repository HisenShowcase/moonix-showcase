import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  providers: [
    { provide: ToastrService, useClass: ToastrService },
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private toastr: ToastrService) { }

  SendMessage(message: string, description: string)
  {
    this.toastr.warning(message, description);
  }
}
