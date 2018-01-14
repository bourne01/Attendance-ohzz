import { Component, OnInit } from '@angular/core';
import { AttService } from '../att.service';
import { AttSummery } from './att-sum.model';

@Component({
  selector: 'app-attendance-manage',
  templateUrl: './attendance-manage.component.html',
  styleUrls: ['./attendance-manage.component.css']
})
export class AttendanceManageComponent implements OnInit {
  private attSumList:AttSummery[];
  private attDealList = ['立即处理','等待处理','处理完成'];
  private isMask = false;
  private selectedItem:AttSummery;
  constructor(private attSumService:AttService) { }

  ngOnInit() {
    this.attSumService.getAttSum().subscribe(
      data =>{
        let _attSumList:AttSummery[] = [];
        for(let att of data['dataList']){
          console.log(att);
          _attSumList.push({
            'userPower':att.userpower,
            '_class':att.F_ClassName,
            'adminClass':att.F_AClassName,
            'stuNO':att.F_StudentNo,
            'stuName':att.F_StudentName,
            'courseName':att.F_CourseName,
            'attTime':att.F_Week+'/'+att.F_WeekDay+'/'+att.F_Section,
            'attType':att.F_Attence,
            'attDeal':att.attencedeal
          }
            
          )
        }
        console.log(_attSumList);
        this.attSumList = _attSumList;
      },
      error => console.log(error)
    )
  }
  onClick(att:AttSummery){
    console.log(att);
    this.selectedItem = att;
    this.isMask = true;
  }
  cancel(){
    this.isMask = false;
    this.selectedItem = null;
  }

}
