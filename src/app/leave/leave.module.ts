import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';
import { LeaveNoteComponent } from './leave-note/leave-note.component';
import { LeaveSearchComponent } from './leave-search/leave-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeaveNoteComponent, 
    LeaveSearchComponent,   
  ]
})
export class LeaveModule { }
