import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-position',
  templateUrl: './current-position.component.html',
  styleUrls: ['./current-position.component.css']
})
export class CurrentPositionComponent implements OnInit {
  isHome:boolean = true;
  isLeave:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

}
