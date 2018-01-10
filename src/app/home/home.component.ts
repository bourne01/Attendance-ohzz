import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    //sessionStorage.removeItem('isLogin');//登录到主页后，恢复登录组件初始状态
  }
  onClick(){
  }

}
