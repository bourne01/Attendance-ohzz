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
  private attActionList:string[] = ['正常','迟到','严重迟到','旷课','早退'];
  private srcStuNO:string;
  private tarStuNO:string;
  constructor(private studentService:ClassScheduleService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        let _studentsList:any[][]=[];
        let _studentList:any[] = data['dataList'];
        let _studentList_:any[] = [];
        _studentList[0].attStatus = '3';
        console.log(_studentList[0]);
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
  /**
   * 获取被拖动元素中的学生学号信息
   * @param event ---拖动事件信息
   * @param student ---被拖拽的学生信息
   */
  dragStart(event,student){
    console.log('start dragging');
    this.srcStuNO = student.stuNO;
  }
  /**
   * 一旦放置于目标区域，则完成座位等信息交换
   * @param event ---拖动事件信息
   * @param student ---被放置区域的学生信息
   */
  drop(event,student){
    console.log('Dropped');
    this.tarStuNO = student.stuNO;
    this.swapSeat(this.srcStuNO,this.tarStuNO);
  }
  /**
   * 根据学生学号，找到学生在studentList数组的下标信息
   * @param stuNO --学生学号
   */
  getStudent(stuNO:string){
    for(let i in this.studentsList)
      for(let j in this.studentsList[i]){
        if(this.studentsList[i][j].stuNO == stuNO)
          return i+'^'+j;
      }
  }
  /**
   * 完成交换信息
   * @param _srcStuNO --源学生学号
   * @param _tarStuNO --目标学生学号
   */
  swapSeat(_srcStuNO:string,_tarStuNO:string){
    let [src1,src2]= this.getStudent(_srcStuNO).split('^');
    let [tar1,tar2] = this.getStudent(_tarStuNO).split('^');
    let srcStu = this.studentsList[src1][src2];
    this.studentsList[src1][src2] = this.studentsList[tar1][tar2];
    this.studentsList[tar1][tar2] = srcStu;  
  }  

}
