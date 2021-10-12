import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { Favorites } from '../Models/Favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Favorites[];
  constructor(private favoritesService: FavoritesService, private router: Router) { }

  ngOnInit() {
    this.getFavorite();
  }

  getFavorite() {
    this.favoritesService.GetBootcampFavorites()
      .subscribe(result => {
        console.log(result);
        const userId = JSON.parse(window.localStorage.getItem('user')).userId;
        console.log(userId);
        this.favorites = result.filter((u: any) => u.usersId === userId);
      })
  }

  dueces(id: number) {
    this.favoritesService.delete(id).subscribe(() => {
      this.getFavorite();
    })
  }

}
