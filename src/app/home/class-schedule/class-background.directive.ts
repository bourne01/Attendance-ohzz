import { Directive, Renderer, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appClassBackground]'
})
export class ClassBackgroundDirective {
  private defaultColor:string = '#b2c881'
  private element:HTMLElement;
  //默认下，课程的背景颜色列表
  private defaultColorList:string[] = [
                                '#b2c881','#f797c4',
                                '#61a9ea','#7fcde7',
                                '#fe9a97','#fcc06b',
                                '#b6b2f0','#f797c4'
                              ];
  //鼠标悬停于课程块，课程的背景颜色列表
  private hoverColorList:string[] = [
                                '#96ad63','#dd6aa0',
                                '#538fc5','#64a6bc',
                                '#f26b67','#e7a444',
                                '#8e89d4','#dd6aa0'
                              ];

  @Input() classSequence:number;
  @Input() courseName:string;                            
  constructor(private elementRef: ElementRef) {   
      
  }
  ngOnInit(){
    let courseList:string[] = [];
    this.element = this.elementRef.nativeElement;
    let colorIndex:number = Math.floor(Math.random()*10);
    if( colorIndex > 7){//随机数大于7则设置为0
      colorIndex = 0;
    }
    let lastCourseName:string;
    let lastIndex:number;
    if(this.classSequence > 6 && sessionStorage.getItem((this.classSequence - 7).toString())){//非第一节，且有课程信息，其中数字六为数组下标，7为一个星期7天
      lastCourseName = JSON.parse(sessionStorage.getItem((this.classSequence - 7).toString()))[0];//获取前一节的课程名
      lastIndex = parseInt(JSON.parse(sessionStorage.getItem((this.classSequence - 7).toString()))[1])//获取前一节课的背景颜色数组下标
      if(lastCourseName == this.courseName){//前一节和当前节课程相同，则设置统一的背景色
        this.element.style.backgroundColor = this.defaultColorList[lastIndex];
        colorIndex = lastIndex;
      }else{//不相同，则随机设置本节课程的背景颜色
        this.element.style.backgroundColor = this.defaultColorList[colorIndex];
      }        
    }else{//设置课程表每天的第一节课的背景颜色
      this.element.style.backgroundColor = this.defaultColorList[colorIndex]; 
    }
    /*把当前节的课程名称和背景颜色信息写入本地session中*/    
    courseList.push(this.courseName);
    courseList.push(colorIndex.toString());
    sessionStorage.setItem(this.classSequence.toString(),JSON.stringify(courseList));
  }
  /**
   * 鼠标进入课程块，则改变颜色信息
   */
  @HostListener('mouseenter')
  onMouseEnter(){
    let index = parseInt(JSON.parse(sessionStorage.getItem(this.classSequence.toString()))[1]);
    this.element.style.backgroundColor = this.hoverColorList[index];
  }
  /**
   * 鼠标离开课程块，则还原颜色信息
   */
  @HostListener('mouseleave')
  onMouseLeave(){
    let index = parseInt(JSON.parse(sessionStorage.getItem(this.classSequence.toString()))[1]);
    this.element.style.backgroundColor = this.defaultColorList[index];
  }
}
