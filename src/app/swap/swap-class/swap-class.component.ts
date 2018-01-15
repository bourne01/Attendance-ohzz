import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap-class',
  templateUrl: './swap-class.component.html',
  styleUrls: ['./swap-class.component.css']
})
export class SwapClassComponent implements OnInit {
  private weekList:string[] = [];
  private MAXWEEK:number = 25;
  private outWeek:string = "-1";
  private inWeek:string = "-1";
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=this.MAXWEEK;i++)
      this.weekList.push(i.toString());
  }
  selectOutWeek(select:any){
    console.log("I M starting swapping class")
    console.log(select);
  }
  selectInWeek(select:any){
    console.log("I M accepting swapping class")
    console.log(select);
  }
}
