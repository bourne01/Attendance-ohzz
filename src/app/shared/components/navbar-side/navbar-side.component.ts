import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.css']
})
export class NavbarSideComponent implements OnInit {
  isExpand:boolean = true;//默认下拉菜单箭头向下
  isHomeVisited:boolean = false;//默认显示首页
  isLeaveVisited:boolean = false;
  isAttVisited:boolean = false;
  isSwapLeaveVisited:boolean = false;
  isSwapClassVisited:boolean = false;
  isAttManageVisited:boolean = false;
  isAttReportVisited:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  /**
   * 处理菜单收展
   */
  menuDownUP(){
    this.isExpand = !this.isExpand;
  }
  /**
   * 处理导航按钮的样式
   */
  onClick(srcElement:string){
    /*恢复所有导航条默认样式 */
    this.isHomeVisited = true;
    this.isLeaveVisited = false;
    this.isAttVisited = false;
    this.isSwapLeaveVisited = false;
    this.isSwapClassVisited = false;
    this.isAttManageVisited = false;
    this.isAttReportVisited = false;
    /*更改被选中的导航条样式 */
    switch(srcElement){
      case 'home':
        this.isHomeVisited = false;
        break;
      case 'leave':
        this.isLeaveVisited = true;
        break;
      case 'att-manage':
        this.isAttManageVisited = true;
        this.isAttVisited = true;
        break;
      case 'att-report':
        this.isAttReportVisited = true;
        this.isAttVisited = true;
        break;
      case 'swap-leave':
        this.isSwapLeaveVisited = true;
        break;
      case 'swap-class':
        this.isSwapClassVisited = true;
        break;
    }
  }
  }
