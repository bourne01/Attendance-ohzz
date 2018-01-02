import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.css']
})
export class ClassInfoComponent implements OnInit {
  private weekday:string;
  private classSeq:string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    let routeParams =this.activatedRoute.snapshot.params;
    this.weekday = routeParams.weekday;
    this.classSeq = routeParams.classSeq;

  }
  }

}
