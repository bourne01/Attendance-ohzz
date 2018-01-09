import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ClassScheduleService {
  scheduleURL:string = "assets/mock-data/coursetablebypanyou.json";
  studentsURL:string = "assets/mock-data/getstudentlist.json";
  carsURL:string = "assets/mock-data/cars-small.json";
  constructor(private http:HttpClient) { }
  /**
   * 获取教师课程表
   */
  getSchedule(){
    console.log(this.scheduleURL);
    return this.http.get(this.scheduleURL)
  }
  setAttAction(para:string){
    console.log('Setting Attendance Action...'+para);
  }
  /**
   * 获取学生列表
   */
  getStudents(){
    return this.http.get(this.studentsURL);
  }
  /**
   * 
   */
  getCars(){
    return this.http.get(this.carsURL);
  }
}
