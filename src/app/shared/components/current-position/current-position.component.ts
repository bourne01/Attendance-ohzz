import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-position',
  templateUrl: './current-position.component.html',
  styleUrls: ['./current-position.component.css']
})
export class CurrentPositionComponent implements OnInit {
  isHome:boolean = false;
  isClassAttendance:boolean = false;
  isLeave:boolean = false;
  isLeaveNote:boolean = false;
  isAttendanceManage:boolean = false;
  isAttendanceReport:boolean = false;
  isSwapLeave:boolean = false;
  isSwapLeaveNote:boolean = false;
  isSwapClass:boolean = false;
  isSwapClassNote:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.router.url);
    let arrURL:string[] = this.router.url.split('/');
    switch(arrURL[arrURL.length -1]){
      case 'home':
        this.isHome = true;
        break;
      case 'class-schedule':
        this.isClassAttendance = true;
        break;
      case 'att-manage':
        this.isAttendanceManage = true;
        break;
      case 'att-report':
        this.isAttendanceReport = true;
        break;
      case 'leave':
        this.isLeave = true;
        break;
      case 'swap-leave':
        this.isSwapLeave = true;
        break;
      case 'swap-class':
        this.isSwapClass = true;
        break;
    }
  }

}
