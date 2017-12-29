import { Directive, Renderer, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appClassBackground]'
})
export class ClassBackgroundDirective {
  private defaultColor:string = '#b2c881'
  private element:HTMLElement;
  private defaultColorList:string[] = [
                                '#b2c881','#f797c4',
                                '#61a9ea','#7fcde7',
                                '#fe9a97','#fcc06b',
                                '#b6b2f0','#f797c4'
                              ];
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
    if( colorIndex > 7){
      colorIndex = 0;
    }
    let _courseName = JSON.parse(sessionStorage.getItem(this.classSequence.toString()))[0];
    if(_courseName == this.courseName)
      console.log(_courseName);
    this.element.style.backgroundColor = this.defaultColorList[colorIndex]; 
    courseList.push(this.courseName);
    courseList.push(colorIndex.toString());
    sessionStorage.setItem(this.classSequence.toString(),JSON.stringify(courseList));
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    let index = parseInt(JSON.parse(sessionStorage.getItem(this.classSequence.toString()))[1]);
    this.element.style.backgroundColor = this.hoverColorList[index];
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    let index = parseInt(JSON.parse(sessionStorage.getItem(this.classSequence.toString()))[1]);
    this.element.style.backgroundColor = this.defaultColorList[index];
  }
}
