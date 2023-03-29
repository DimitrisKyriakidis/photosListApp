import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [AngularMaterialModule, CommonModule, RouterModule],
  exports: [NavbarComponent],
  providers: [],
})
export class SharedModule {}
