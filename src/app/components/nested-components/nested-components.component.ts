import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-components',
  templateUrl: './nested-components.component.html',
  styleUrls: ['./nested-components.component.css']
})
export class NestedComponentsComponent implements OnInit {
  added:boolean=false;
  arr:any[]=[];
  constructor() { }

  ngOnInit(): void {
    // this.added=false;
  }
  onClick(){
    this.added=true;
    this.arr.push(this.added);
  }

}
