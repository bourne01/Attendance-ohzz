import { Routes, RouterModule } from "@angular/router";
import { LeaveNoteComponent } from "./leave-note/leave-note.component";
import { LeaveManageComponent } from "./leave-manage/leave-manage.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export const leaveRoutes:Routes = [
    {
        path:'leave',
        component:LeaveManageComponent,
        
    },
    {
        path:'leave/note',
        component:LeaveNoteComponent
    }
]

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(leaveRoutes)
    ],
    exports:[
      RouterModule
    ],
    declarations: [
      
     ]
  })
  export class LeaveRoutesModule { }