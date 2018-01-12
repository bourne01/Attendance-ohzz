import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeaveModule } from './leave/leave.module';
import { HomeComponent } from './home/home.component';
import { LeaveManageComponent } from './leave/leave-manage/leave-manage.component';
import { NavbarSideComponent } from './shared/components/navbar-side/navbar-side.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceComponent } from './attendance/attendance/attendance.component';
import { SwapModule } from './swap/swap.module';
import { SwapComponent } from './swap/swap/swap.component';
import { AttendanceManageComponent } from './attendance/attendance-manage/attendance-manage.component';
import { AttendanceReportComponent } from './attendance/attendance-report/attendance-report.component';
import { SwapLeaveComponent } from './swap/swap-leave/swap-leave.component';
import { SwapClassComponent } from './swap/swap-class/swap-class.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './user/logout/logout.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    NavbarSideComponent,
    HeaderComponent,
      
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    LeaveModule,
    AttendanceModule,
    SwapModule,    
    AppRoutesModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
