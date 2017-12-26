import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceManageComponent } from './attendance-manage/attendance-manage.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { RouterModule } from '@angular/router';
import { AttendanceRoutesModule } from './attendance-routes.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { CurrentPositionComponent } from '../shared/components/current-position/current-position.component';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutesModule,
    RouterModule
  ],
  declarations: [            
    
  ]
})
export class AttendanceModule { }
