import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainState } from './main.state';

export const mainState = createFeatureSelector<MainState>('main');

export const selectLoading = createSelector(
  mainState,
  (state) => state.loading
);

export const selectAllPhotos = createSelector(
  mainState,
  (state) => state.allPhotos
);

export const selectActivePhoto = createSelector(
  mainState,
  (state) => state.activePhoto
);
