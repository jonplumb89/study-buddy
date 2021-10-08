import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorites } from './Models/Favorites';
import { Question } from './Models/Question';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  apiUrl: string = "https://localhost:5001/api/BootcampFavorites";
  constructor(private httpClient: HttpClient) { }

  GetBootcampFavorites() {
    return this.httpClient.get<Favorites[]>(this.apiUrl);
  }

  postBootcampFavorites(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.apiUrl, question);
  }
}
