import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';
import { LeaveNoteComponent } from './leave-note/leave-note.component';
import { LeaveSearchComponent } from './leave-search/leave-search.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { LeaveService } from './leave.service';
import { RouterModule } from '@angular/router';
import { leaveRoutes, LeaveRoutesModule } from './leave-routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    LeaveRoutesModule,
    RouterModule
  ],
  declarations: [
    LeaveManageComponent,
    LeaveNoteComponent, 
    LeaveSearchComponent,
       
  ],
  exports:[
    //LeaveManageComponent
  ],
  providers:[
    LeaveService
  ]
})
export class LeaveModule { }
