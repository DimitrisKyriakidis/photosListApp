import { createAction, props } from '@ngrx/store';
import { Photo } from '../shared/models/photo.model';

export const enum MainActionTypes {
  getAllPhotos = '[Main] get all photos',
  getAllPhotosSuccess = '[Main] get all photos success',
  getAllPhotosFail = '[Main] get all photos fail',

  getPhotoById = '[Main] get photo by id',
  getPhotoByIdSuccess = '[Main] get photo by id success',
  getPhotoByIdFail = '[Main] get photo by id fail',
}

export const getAllPhotos = createAction(
  MainActionTypes.getAllPhotos,
  props<{
    pageIndex: number;
    pageSize: number;
  }>()
);

export const getAllPhotosSuccess = createAction(
  MainActionTypes.getAllPhotosSuccess,
  props<{
    allPhotos: Photo[];
  }>()
);

export const getAllPhotosFail = createAction(
  MainActionTypes.getAllPhotosFail,
  props<{
    error: string;
  }>()
);

export const getPhotoById = createAction(
  MainActionTypes.getPhotoById,
  props<{
    id: string;
  }>()
);

export const getPhotoByIdSuccess = createAction(
  MainActionTypes.getPhotoByIdSuccess,
  props<{
    activePhoto: Photo;
  }>()
);

export const getPhotoByIdFail = createAction(
  MainActionTypes.getPhotoByIdFail,
  props<{
    error: string;
  }>()
);
