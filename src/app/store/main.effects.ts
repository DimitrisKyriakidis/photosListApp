import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MainService } from '../services/main.service';
import { Photo } from '../shared/models/photo.model';
import { MainActionTypes } from './main.actions';

@Injectable()
export class MainEffects {
  getAllPhotosEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActionTypes.getAllPhotos),
      mergeMap((payload) =>
        this.mainService
          .getAllPhotos(payload['pageIndex'], payload['pageSize'])
          .pipe(
            map((response: any) => {
              return {
                type: MainActionTypes.getAllPhotosSuccess,
                allPhotos: response,
              };
            }),
            catchError((err) => {
              console.log(err);
              return of({ type: MainActionTypes.getAllPhotosFail });
            })
          )
      )
    );
  });

  getPhotoByIdEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActionTypes.getPhotoById),
      mergeMap((payload: Photo) =>
        this.mainService.getPhotoById(payload.id).pipe(
          map((response: Photo) => {
            return {
              type: MainActionTypes.getPhotoByIdSuccess,
              activePhoto: response,
            };
          }),
          catchError((err) => {
            console.log(err);
            return of({ type: MainActionTypes.getPhotoByIdFail });
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private mainService: MainService) {}
}
