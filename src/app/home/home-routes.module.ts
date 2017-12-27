import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AttListComponent } from './class-schedule/att-list/att-list.component';
import { AttSeatComponent } from './class-schedule/att-seat/att-seat.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';

export const homeRoutes:Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        redirectTo:'class-schedule',
        pathMatch:'full'        
      },
      {
        path:'class-schedule',
        component:ClassScheduleComponent
      },      
      {        
        path:'att-list',
        component:AttListComponent
      },
      {
          path:'att-seat',
          component:AttSeatComponent
      }
    ]
    
  }
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: []
})
export class HomeRoutesModule { }
