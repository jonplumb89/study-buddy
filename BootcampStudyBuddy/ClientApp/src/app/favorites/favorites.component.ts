import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Favorites } from '../Models/Favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Favorites[];
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favoritesService.GetBootcampFavorites()
      .subscribe(result => {
        this.favorites = result;
      })
  }

}
