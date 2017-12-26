import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceManageComponent } from './attendance-manage/attendance-manage.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { RouterModule,Routes } from '@angular/router';

export const attendanceRoutes:Routes = [
  {
    path:'attendance',
    component:AttendanceComponent,
    children:[
      {
        path:'att-manage',
        component:AttendanceManageComponent
      },
      {
        path:'att-report',
        component:AttendanceReportComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(attendanceRoutes)
  ],
  exports:[
    RouterModule
],
  declarations: [        
  ]
})
export class AttendanceRoutesModule { }
