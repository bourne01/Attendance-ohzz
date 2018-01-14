import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToCnNumberPipe } from './pipes/to-cn-number.pipe';
import { CurrentPositionComponent } from './components/current-position/current-position.component';
import { SubstringPipe } from './pipes/substring.pipe';
import { MaskComponent } from './components/mask/mask.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ToCnNumberPipe,
    CurrentPositionComponent,
    SubstringPipe,
    MaskComponent
  ],
  exports:[
    ToCnNumberPipe,
    CurrentPositionComponent,
    MaskComponent,
    SubstringPipe
    
  ]
})
export class SharedModule { }
