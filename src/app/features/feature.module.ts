import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainService } from '../services/main.service';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { SharedModule } from '../shared/modules/shared.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SinglePhotoPageComponent } from './single-photo-page/single-photo-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/photos' },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: SinglePhotoPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'photos-list', component: PhotosListComponent },
];

@NgModule({
  declarations: [
    PhotosComponent,
    FavoritesComponent,
    PhotosListComponent,
    SinglePhotoPageComponent,
  ],

  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],

  exports: [],
  providers: [MainService],
})
export class FeatureModule {}
