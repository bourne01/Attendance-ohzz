import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('isLogin');//登录到主页后，恢复登录组件初始状态
    location.href = 'login';
  }

}
