import { Component, OnInit } from '@angular/core';

import { ClassScheduleService } from '../class-schedule.service';
import { error } from 'util';
import { Student } from './student-list.model';
import { Car } from '../car';

@Component({
  selector: 'app-att-list',
  templateUrl: './att-list.component.html',
  styleUrls: ['./att-list.component.css']
})
export class AttListComponent implements OnInit {
  private students:Student[];
  private cars:Car[];
  constructor(private studentService:ClassScheduleService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        let _student:Student[] = [];
        let index:number = 0;
        for(let student of data['dataList']){
          index++;
          _student.push({sequence:index,stuNO:student.stuNO,_className:student.myClaName,stuName:student.stuName});
        }
        /* console.log(data['data'])
        this.cars = data['data']; */
        console.log(_student);
        this.students = _student;
      },
      error => console.log(error)
    )
  }
  onClick(){
    
  }
  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    console.log(event.first);
    console.log(event.rows);
    console.log(event.page);
    console.log(event.pageCount);this.students = [];
}
}
