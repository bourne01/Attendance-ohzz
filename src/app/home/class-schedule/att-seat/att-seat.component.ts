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
  constructor(private studentService:ClassScheduleService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }  

}
