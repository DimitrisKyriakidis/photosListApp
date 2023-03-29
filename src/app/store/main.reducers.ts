import { createReducer, on } from '@ngrx/store';
import {
  getAllPhotos,
  getAllPhotosSuccess,
  getPhotoById,
  getPhotoByIdSuccess,
} from './main.actions';

import { initialMainState } from './main.state';

export const _mainReducer = createReducer(
  initialMainState,
  on(getAllPhotos, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(getAllPhotosSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      allPhotos: [...state.allPhotos, ...action.allPhotos],
    };
  }),
  on(getPhotoById, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(getPhotoByIdSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      activePhoto: action.activePhoto,
    };
  })
);

export function mainReducer(state, action) {
  return _mainReducer(state, action);
}
