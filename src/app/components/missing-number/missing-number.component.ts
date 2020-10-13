import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MissingDialogueComponent } from '../missing-dialogue/missing-dialogue.component';
@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.css']
})
export class MissingNumberComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
   onSubmit(value:any){

              this.dialog.open(MissingDialogueComponent,{data:{value:value}}
                );
   }

}
