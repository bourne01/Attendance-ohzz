import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DragDropModule} from 'primeng/primeng';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.css']
})
export class ClassInfoComponent implements OnInit {
  private isListMode:boolean = false;
  private isSeatMode:boolean = false;
  private weekday:string;
  private classSeq:string;
  private drag:string;
  private drop:string;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let arrURL:string[] = this.router.url.split('/');
    let urlName:string;//URL路径最后部分的名称 如：/home/att-seat?x=1&y=2,则取att-seat
    console.log(arrURL[arrURL.length -1].indexOf('?'));
    if(arrURL[arrURL.length -1].indexOf('?') != -1){
      urlName = arrURL[arrURL.length -1].split('?')[0];
    }else{
      urlName = (arrURL[arrURL.length -1]);
    }
    console.log(urlName);
    switch(urlName){
      case 'att-seat':
        this.isSeatMode = true;
        break;
      case 'att-list':
        this.isListMode = true;
        break;
    }

    let routeParams =this.activatedRoute.snapshot.params;
    this.weekday = routeParams.weekday;
    this.classSeq = routeParams.classSeq;

  }
  dragStart(event,s:string){
    this.drag = s;
    console.log(this.drag);
  }
  onDrop(event){
    this.drop = this.drag;
    console.log(this.drop);
  } 

}
