import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ClassScheduleService {
  scheduleURL:string = "assets/mock-data/coursetablebypanyou.json"
  constructor(private http:HttpClient) { }
  /**
   * 获取教师课程表
   */
  getSchedule(){
    console.log(this.scheduleURL);
    return this.http.get(this.scheduleURL)
    )
  }
}
