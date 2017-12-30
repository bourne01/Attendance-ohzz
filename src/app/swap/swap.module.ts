import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapLeaveComponent } from './swap-leave/swap-leave.component';
import { SwapClassComponent } from './swap-class/swap-class.component';
import { SwapRoutesModule } from './swap-routes.module';
import { SwapComponent } from './swap/swap.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SwapRoutesModule,
    SharedModule
  ],
  declarations: [
    SwapComponent,
    SwapLeaveComponent,
    SwapClassComponent
    
  ]
})
export class SwapModule { }
