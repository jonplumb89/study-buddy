import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from './Models/Favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  apiUrl: string = "https://localhost:5001/api/BootcampFavorites";
  constructor(private httpClient: HttpClient) { }

  GetBootcampFavorites() {
    return this.httpClient.get<Favorites[]>(this.apiUrl);
  }
}
