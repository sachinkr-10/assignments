import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corn-cmpts',
  templateUrl: './corn-cmpts.component.html',
  styleUrls: ['./corn-cmpts.component.css']
})
export class CornCmptsComponent implements OnInit {
  value:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
