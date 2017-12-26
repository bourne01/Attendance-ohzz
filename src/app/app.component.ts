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
    console.log('App starting...'+localStorage.getItem('isLogin'));
    this.isLogined = localStorage.getItem('isLogin') == 'false';
  }
  
}
