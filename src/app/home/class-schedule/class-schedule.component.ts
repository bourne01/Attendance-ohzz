import { Component, OnInit } from '@angular/core';
import { ClassScheduleService } from './class-schedule.service';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
export class ClassScheduleComponent implements OnInit {
  scheduleList:string[][] = [];//课程表信息
  constructor(private scheduleService:ClassScheduleService) { }

  ngOnInit() {
    this.scheduleService.getSchedule().subscribe(
      data => {
        let scheduleLength = data["lineSched"].length;
        let _scheduleList:string[] = [];
        /*把接受到JSON数据转换成为课程表*/
        for(let i=0;i<7;i++)//7为一个星期七天
          for(let j=0;j<scheduleLength;j++){
              if(j%8 == i)//记录每天第i节课的信息
                _scheduleList.push(data["lineSched"][j]);         
              if(_scheduleList.length == 7){//一旦记录完毕每天的第i节信息，写入数组
                this.scheduleList.push(_scheduleList);
                _scheduleList = [];  
              }                                     
          }
      },
      error => console.log(error)
    )
  }

}
