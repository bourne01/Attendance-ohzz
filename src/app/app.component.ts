import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* private isLogined:boolean = true;
  constructor(private router:Router){}
  if(isLogined){
    this.router.navigate(['/login']);
  } */
  isLogined:boolean = false ;
  ngOnInit(){
    /* let isFirstLogin = sessionStorage.getItem('isFirstLogin') == 'true';
    if(isFirstLogin){
      
    }else{
      sessionStorage.setItem('isFirstLogin','true');
    }
    console.log(typeof sessionStorage.getItem('isLogin'));  */   
    this.isLogined = sessionStorage.getItem('isLogin') == 'false';//当用户未登录或登录超时，登录组件则隐藏头部组件和左侧导航条
  }
  
}
