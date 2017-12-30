import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToCnNumberPipe } from './pipes/to-cn-number.pipe';
import { CurrentPositionComponent } from './components/current-position/current-position.component';
import { SubstringPipe } from './pipes/substring.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ToCnNumberPipe,
    CurrentPositionComponent,
    SubstringPipe
  ],
  exports:[
    ToCnNumberPipe,
    CurrentPositionComponent,
    SubstringPipe
    
  ]
})
export class SharedModule { }
