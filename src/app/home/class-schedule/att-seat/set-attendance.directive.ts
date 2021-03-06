import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appSetAttendance]'
})
export class SetAttendanceDirective {
  private element:HTMLElement;
  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }
  @Input()
  stuNO:string;
  ngOnInit(){
     
  }
  @HostListener('click',['$event'])
  onClick(event:Event){
    let ulObject:HTMLElement = document.getElementById('ul'+this.stuNO);
    let lastVisitedUlId:string = sessionStorage.getItem('ulId');
    if(lastVisitedUlId == this.stuNO){//访问相同的ul
      let  multiClick:string = 'false';
      if(sessionStorage.getItem('multiClick')){
        multiClick = sessionStorage.getItem('multiClick');
      }
      ulObject.style.display = multiClick=='true'?'block':'none';
      if(multiClick == 'true')
        sessionStorage.setItem('multiClick','false');
      else
        sessionStorage.setItem('multiClick','true');
    }else{
      let lastUlObject:HTMLElement = document.getElementById('ul'+lastVisitedUlId);
      if(lastUlObject)
        lastUlObject.style.display = 'none';//关闭最近访问的ul列表
      sessionStorage.removeItem('multiClick');//删除上次访问写入的值
      ulObject.style.display = 'block';
    }    
    sessionStorage.setItem('ulId',this.stuNO);
    console.log(event.srcElement.nodeName);
    console.log(event);
    if(event.srcElement.nodeName == "LI"){
      let spanObject:HTMLElement = document.getElementById('span'+this.stuNO);
      spanObject.innerText = event.srcElement.innerHTML;
      ulObject.style.display = 'none';
    }    
  }

}
