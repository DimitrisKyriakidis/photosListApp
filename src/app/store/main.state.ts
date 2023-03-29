import { Photo } from '../shared/models/photo.model';

export interface MainState {
  loading: boolean;
  allPhotos: Photo[];

  activePhoto: Photo;
}
export const initialMainState: MainState = {
  loading: false,
  allPhotos: [],
  activePhoto: {},
};
