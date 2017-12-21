import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentPositionComponent } from './current-position/current-position.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavbarSideComponent } from '../shared/components/navbar-side/navbar-side.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentPositionComponent,
    HeaderComponent,
    NavbarSideComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
