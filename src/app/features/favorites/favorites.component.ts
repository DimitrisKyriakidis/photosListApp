import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from '../../services/main.service';
import { Photo } from '../../shared/models/photo.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoritesPhotos$: Observable<Photo[]>;

  constructor(
    private store: Store,
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favoritesPhotos$ = this.mainService.getFavoritesPhotos();
  }

  openPhoto(photo: Photo) {
    this.router.navigate([`/photos/${photo.id}`]);
  }
}
