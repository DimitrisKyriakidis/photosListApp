import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Photo } from '../shared/models/photo.model';
import { BehaviorSubject, Observable, share, shareReplay } from 'rxjs';

export const FAVORITES_KEY = 'favorites';

@Injectable({ providedIn: 'root' })
export class MainService {
  apiUrl: string = 'https://picsum.photos';

  private subject = new BehaviorSubject([]);
  public favorites$: Observable<Photo[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.initLocalStorageFavPhotos();
  }

  getAllPhotos(pageIndexValue?: number, pageSizeValue?: number) {
    let params = new HttpParams();
    params = params
      .set('page', pageIndexValue?.toString())
      .set('limit', pageSizeValue?.toString());

    return this.http.get(`${this.apiUrl}/v2/list`, { params });
  }

  initLocalStorageFavPhotos() {
    const storageValue = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    if (storageValue?.length === 0 || storageValue === null) {
      const favPhotos = [];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favPhotos));
    }
  }

  addToFavorites(selectedPhoto: Photo) {
    const favoritesPhotos: Photo[] = JSON.parse(
      localStorage.getItem(FAVORITES_KEY)
    );
    favoritesPhotos.push(selectedPhoto);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesPhotos));
    return favoritesPhotos;
  }

  getFavoritesPhotos() {
    const favPhotos = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    this.subject.next(favPhotos);
    return this.favorites$;
  }

  removeFromFavorites(id: string) {
    let favoritesPhotos: Photo[] = JSON.parse(
      localStorage.getItem(FAVORITES_KEY)
    );
    const index = favoritesPhotos.findIndex((photo) => photo.id == id);
    favoritesPhotos.splice(index, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesPhotos));
    return favoritesPhotos;
  }

  getPhotoById(id: string) {
    return this.http.get(`https://picsum.photos/id/${id}/info`);
  }
}
