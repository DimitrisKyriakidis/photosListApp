import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';
import { Photo } from '../shared/models/photo.model';
import { selectAllPhotos } from '../store/main.selector';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  allPhotos$: Observable<Photo[]>;

  constructor(private store: Store, private mainService: MainService) {}

  ngOnInit(): void {
    this.allPhotos$ = this.store.select(selectAllPhotos);
  }

  addToFavorites(selectedPhoto: Photo) {
    this.mainService.addToFavorites(selectedPhoto);
  }
}
