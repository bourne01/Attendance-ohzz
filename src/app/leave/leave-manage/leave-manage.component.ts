import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { Leave } from '../leave.model';

@Component({
  selector: 'app-leave-manage',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.css']
})
export class LeaveManageComponent implements OnInit {
  private leaveList:Leave[];
  constructor(private leaveService:LeaveService) { }

  ngOnInit() {
    this.leaveService.getStudentLeave().subscribe(
      data =>{
        let _leaveList:Leave[] = [];
        for(let leave of data['dataList'])
          _leaveList.push({
            stuNO:leave.F_StudentNo,
            _class:leave.F_ClassName,
            type:leave.F_LeaveType,
            startTime:leave.F_StartWeek+'/'+leave.F_StartWeekDay+'/'+leave.F_StartSection,
            endTime:leave.F_EndWeek+'/'+leave.F_EndWeekDay+'/'+leave.F_EndSection
          })
        console.log(_leaveList);
        this.leaveList = _leaveList;
        console.log(data);
      },
      error => console.log(error)
    );
  }


}
