import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeaveManageComponent } from './leave/leave-manage/leave-manage.component';
import { AttendanceComponent } from './attendance/attendance/attendance.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

export const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent  
  },
  {
    path:'logout',
    component:LogoutComponent  
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'app',
    component:AppComponent
  },
  {
    path:'leave',
    loadChildren:'app/leave/leave.module#LeaveModule'
  },
  {
    path:'attendance',
    loadChildren:'app/attendance/attendance.module#AttendanceModule'
  },
  {
    path:'swap',
    loadChildren:'app/swap/swap.module#SwapModule'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      /* { enableTracing: true } */ )
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
