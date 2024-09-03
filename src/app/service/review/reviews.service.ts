import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'https://minecraftservery.eu/api/v1/server/QJg3Fdqsh5VZky84/reviews';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
