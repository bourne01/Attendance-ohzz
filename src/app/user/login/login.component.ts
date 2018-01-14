import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user:User = {};
  constructor(private router:Router) { }

  ngOnInit() {
    console.log("I M login");
    console.log(this.user);
    if(localStorage.getItem('username')){
      this.user = new User(localStorage.getItem('username'),localStorage.getItem('password'));
    }
    console.log(this.user);
  }
  /**
   * 提交表单
   * @param value --表单数据对象 
   */
  onSubmit(value:any){
    console.log(value);
    if(value.rememberme){//选择记住密码
      localStorage.setItem('username',value.username);
      localStorage.setItem('password',value.password);
    }
    sessionStorage.setItem('isLogin','false');//如果登录成功，则显示标题和左侧导航条
    location.href = 'home';//跳转到主页
  }
}
