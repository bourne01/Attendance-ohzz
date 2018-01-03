import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClassScheduleService } from '../class-schedule.service';

@Component({
  selector: 'app-att-seat',
  templateUrl: './att-seat.component.html',
  styleUrls: ['./att-seat.component.css']
})
export class AttSeatComponent implements OnInit {
  private studentsList:any[][]=[];
  constructor(private studentService:ClassScheduleService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        let _studentsList:any[][]=[];
        let _studentList:any[] = data['dataList'];
        let _studentList_:any[] = [];
        /*把学生分成8个小组 */
        for(let i=0;i<_studentList.length;i++){
          _studentList_.push(_studentList[i]);
          if(( i != 0 && (i % 8) == 7) || i == (_studentList.length-1)){
            _studentsList.push(_studentList_);
            _studentList_ = [];
          }
        }
        this.studentsList = _studentsList.reverse();//反序输出数组，即序号小的同学坐第一排
      },
      error => console.log(error)
    )
  }  

}
