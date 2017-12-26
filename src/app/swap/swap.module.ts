import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapLeaveComponent } from './swap-leave/swap-leave.component';
import { SwapClassComponent } from './swap-class/swap-class.component';
import { SwapRoutesModule } from './swap-routes.module';

@NgModule({
  imports: [
    CommonModule,
    SwapRoutesModule
  ],
  declarations: [
    
  ]
})
export class SwapModule { }
