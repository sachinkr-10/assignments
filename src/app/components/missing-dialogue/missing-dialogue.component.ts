import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-missing-dialogue',
  templateUrl: './missing-dialogue.component.html',
  styleUrls: ['./missing-dialogue.component.css']
})
export class MissingDialogueComponent implements OnInit {
   calculatedValue:number;
   value:number;
  constructor(@Inject(MAT_DIALOG_DATA)public data:any)
  {

   }

  ngOnInit(): void {
    this.calculatedValue=this.calculateMissingNo(parseInt(this.data.value===null?0:this.data.value));
  }
    calculateMissingNo(index:number):number{

                  if(index==0){
                         return 0;
                  }
                  if(index%2==0){
                     this.value=(index*index)-1;
                     return this.value
                  }
                  this.value=(index*index)+1;
                  return this.value;
     }
}
