import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //sessionStorage.setItem('isLogin','true')
    console.log("I M login");
  }
  onClick(){
    sessionStorage.setItem('isLogin','false');//如果登录成功，则显示标题和左侧导航条
    location.href = 'home';//跳转到主页
  }
}
