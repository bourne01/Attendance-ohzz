import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutesModule } from './home-routes.module';
import { AttListComponent } from './class-schedule/att-list/att-list.component';
import { AttSeatComponent } from './class-schedule/att-seat/att-seat.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { ClassScheduleService } from './class-schedule/class-schedule.service';
import { ClassBackgroundDirective } from './class-schedule/class-background.directive';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeRoutesModule
  ],
  exports:[
    RouterModule,    
  ],
  declarations: [
    ClassScheduleComponent,
    AttListComponent,
    AttSeatComponent,
    HomeComponent,        
    ClassBackgroundDirective,
  ],
  providers:[
    ClassScheduleService,
  ]
})
export class HomeModule { }
