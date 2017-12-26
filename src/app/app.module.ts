import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeaveModule } from './leave/leave.module';
import { HomeComponent } from './home/home.component';
import { LeaveManageComponent } from './leave/leave-manage/leave-manage.component';
import { NavbarSideComponent } from './shared/components/navbar-side/navbar-side.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CurrentPositionComponent } from './shared/components/current-position/current-position.component';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceComponent } from './attendance/attendance/attendance.component';
import { SwapModule } from './swap/swap.module';
import { SwapComponent } from './swap/swap/swap.component';
import { AttendanceManageComponent } from './attendance/attendance-manage/attendance-manage.component';
import { AttendanceReportComponent } from './attendance/attendance-report/attendance-report.component';
import { SwapLeaveComponent } from './swap/swap-leave/swap-leave.component';
import { SwapClassComponent } from './swap/swap-class/swap-class.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    CurrentPositionComponent,
    LeaveManageComponent,
    AttendanceComponent,
    SwapComponent,    
    NavbarSideComponent,
    HeaderComponent,
    AttendanceManageComponent,
    AttendanceReportComponent,
    SwapLeaveComponent, 
    SwapClassComponent  
  ],
  imports: [
    BrowserModule,
    HomeModule,
    LeaveModule,
    AttendanceModule,
    SwapModule,    
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
