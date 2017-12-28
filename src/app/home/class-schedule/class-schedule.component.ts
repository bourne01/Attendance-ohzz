import { Component, OnInit } from '@angular/core';
import { ClassScheduleService } from './class-schedule.service';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
export class ClassScheduleComponent implements OnInit {
  scheduleList:string[][] = [];
  constructor(private scheduleService:ClassScheduleService) { }

  ngOnInit() {
    this.scheduleService.getSchedule().subscribe(
      data => {
        let scheduleLength = data["lineSched"].length;
        let _scheduleList:string[] = [];
        for(let i=0;i<7;i++)
          for(let j=0;j<scheduleLength;j++){
              if(j%8 == i)
                _scheduleList.push(data["lineSched"][j]);         
              if(_scheduleList.length == 7){
                this.scheduleList.push(_scheduleList);
                _scheduleList = [];  
              }                                     
          }
        console.log(this.scheduleList);
      },
      error => console.log(error)
    )
  }

}
