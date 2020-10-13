import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents=[
  MatInputModule,MatFormFieldModule,MatDialogModule,MatButtonModule,MatExpansionModule,MatIconModule
];
@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
