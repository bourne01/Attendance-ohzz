import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogined:boolean = false ;
  constructor(private router:Router){}
  
  ngOnInit(){      
    console.log("App is starting");
    if(!sessionStorage.getItem('isLogin'))//首次登录，跳转到登录组件
      this.router.navigate(['/login']);
    this.isLogined = sessionStorage.getItem('isLogin') == 'false';//当用户未登录或登录超时，登录组件则隐藏头部组件和左侧导航条
  }
  
}
