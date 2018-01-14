import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AttService {
  attURL:string = 'assets/mock-data/queryattedance.json'
  constructor(private http:HttpClient) {
    
   }
   /**
    * 获取考勤统计信息
    */
  getAttSum(){
    return this.http.get(this.attURL);
  }
}
