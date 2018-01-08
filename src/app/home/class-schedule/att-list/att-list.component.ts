import { Component, OnInit } from '@angular/core';

import { ClassScheduleService } from '../class-schedule.service';
import { error } from 'util';
import { Student } from './student-list.model';

@Component({
  selector: 'app-att-list',
  templateUrl: './att-list.component.html',
  styleUrls: ['./att-list.component.css']
})
export class AttListComponent implements OnInit {
  private students:Student[] = [];
  private xx="xxx";
  constructor(private studentService:ClassScheduleService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        let index:number = 0;
        for(let student of data['dataList']){
          index++;
          this.students.push({sequence:index,stuNO:student.stuNO,className:student.myClaName,stuName:student.stuName});
        }
        console.log(this.students)
      },
      error => console.log(error)
    )
  }

}
