import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosComponent } from './features/photos/photos.component';
import { FavoritesComponent } from './features/favorites/favorites.component';
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

import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ main: mainReducer }),
    EffectsModule.forRoot([MainEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
