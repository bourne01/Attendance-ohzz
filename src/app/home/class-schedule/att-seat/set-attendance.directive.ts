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
    ulObject.style.display = 'block';
    if(event.target.nodeName == "LI"){
      let spanObjec:HTMLElement = document.getElementById('span'+this.stuNO);
      spanObjec.innerText = event.target.innerText;
      ulObject.style.display = 'none';
    }    
  }

}
