import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from '../../services/main.service';
import { Photo } from '../../shared/models/photo.model';
import { selectAllPhotos } from '../../store/main.selector';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  allPhotos$: Observable<Photo[]>;

  constructor(
    private store: Store,
    private mainService: MainService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.allPhotos$ = this.store.select(selectAllPhotos);
  }

  addToFavorites(selectedPhoto: Photo) {
    this.mainService.addToFavorites(selectedPhoto);
    this.snackBar.open(
      `Photo with id ${selectedPhoto.id} added to favorites succesfully`,
      'X',
      {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      }
    );
  }
}
