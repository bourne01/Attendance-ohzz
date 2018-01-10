import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LeaveService {
  private leaveURL:string = 'assets/mock-data/queryleave.json'
  constructor(private http:HttpClient) { }
  getStudentLeave(){
    return this.http.get(this.leaveURL);
  }

}
