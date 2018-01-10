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
import { ClassInfoComponent } from './class-schedule/class-info/class-info.component';
import { DragDropModule, DataTableModule, PaginatorModule } from 'primeng/primeng';
import { SetAttendanceDirective } from './class-schedule/att-seat/set-attendance.directive';
import { MySelectComponent } from './class-schedule/my-select/my-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DragDropModule,
    HomeRoutesModule,
    DataTableModule,
    PaginatorModule,
    BrowserAnimationsModule
  ],
  exports:[
    RouterModule,    
  ],
  declarations: [
    ClassScheduleComponent,
    ClassInfoComponent,
    AttListComponent,
    AttSeatComponent,
    HomeComponent,
    MySelectComponent,        
    ClassBackgroundDirective,
    SetAttendanceDirective,
  ],
  providers:[
    ClassScheduleService,
  ]
})
export class HomeModule { }
