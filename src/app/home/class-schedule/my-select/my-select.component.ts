import { Component, OnInit, Input } from '@angular/core';
import { ClassScheduleService } from '../class-schedule.service';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements OnInit {
  private attActionList:string[] = ['正常','迟到','严重迟到','旷课','早退'];//考勤各种行为名称
  private attSum:string ="";
  constructor(private studentService:ClassScheduleService) { };

  @Input()
  stuNO:string;
  ngOnInit() {
  }
  /**
   * 提交服务器，设置考勤姓名名称
   * @param event 
   * @param action --考勤行为名称 
   */
  onClick(event,action:string){
    console.log(event);
    
    this.studentService.setAttAction(action);
    this.attSum = action;
    console.log(this.attSum);
  }
}
