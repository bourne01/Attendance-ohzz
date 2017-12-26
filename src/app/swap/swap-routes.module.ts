import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapLeaveComponent } from './swap-leave/swap-leave.component';
import { SwapClassComponent } from './swap-class/swap-class.component';
import { Routes } from '@angular/router';
import { SwapComponent } from './swap/swap.component';
import { RouterModule } from '@angular/router';

export const swapRoutes:Routes = [
  {
    path:'swap',
    component:SwapComponent,
    children:[
      {
        path:'swap-class',
        component:SwapClassComponent
      },
      {
        path:'swap-leave',
        component:SwapLeaveComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(swapRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    
   ]
})
export class SwapRoutesModule { }
