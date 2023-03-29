import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainReducer } from './store/main.reducers';
import { MainEffects } from './store/main.effects';
import { MainService } from './services/main.service';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { SinglePhotoPageComponent } from './single-photo-page/single-photo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    FavoritesComponent,
    PhotosListComponent,
    SinglePhotoPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: 'photos', component: PhotosComponent },
      { path: 'photos/:id', component: SinglePhotoPageComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'photos-list', component: PhotosListComponent },
    ]),
    HttpClientModule,
    StoreModule.forRoot({ main: mainReducer }),
    EffectsModule.forRoot([MainEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BrowserAnimationsModule,
  ],
  providers: [MainService],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
