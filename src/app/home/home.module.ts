import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutesModule } from './home-routes.module';
import { AttListComponent } from './class-schedule/att-list/att-list.component';
import { AttSeatComponent } from './class-schedule/att-seat/att-seat.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { ClassScheduleService } from './class-schedule/class-schedule.service';
import { ClassBackgroundDirective } from './class-schedule/class-background.directive';
import { ToCnNumberPipe } from '../shared/pipes/to-cn-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutesModule
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    ClassScheduleComponent,
    AttListComponent,
    AttSeatComponent,
    ToCnNumberPipe,    
    ClassBackgroundDirective
  ],
  providers:[
    ClassScheduleService,
  ]
})
export class HomeModule { }
