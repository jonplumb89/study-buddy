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

  postBootcampFavorites(favorite: any): Observable<any> {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const f = { answers: favorite.answers, questions: favorite.questions, usersId: user.userId, questionId: favorite.questionId}
    return this.httpClient.post<Question>(this.apiUrl, f);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
