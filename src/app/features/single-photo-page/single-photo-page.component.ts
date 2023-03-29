import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from '../../services/main.service';
import { Photo } from '../../shared/models/photo.model';
import { MainActionTypes } from '../../store/main.actions';
import { selectActivePhoto } from '../../store/main.selector';

@Component({
  selector: 'app-single-photo-page',
  templateUrl: './single-photo-page.component.html',
  styleUrls: ['./single-photo-page.component.css'],
})
export class SinglePhotoPageComponent {
  activePhoto$: Observable<Photo>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch({ type: MainActionTypes.getPhotoById, id: photoId });
    this.activePhoto$ = this.store.select(selectActivePhoto);
  }

  removeFromFavorites(id: string) {
    this.mainService.removeFromFavorites(id);
    this.snackBar.open(`Photo with id ${id} removed succesfully`, 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
    this.router.navigate(['/favorites']);
  }
}
