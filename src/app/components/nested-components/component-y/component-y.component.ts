import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.css']
})
export class ComponentYComponent implements OnInit {


  form: FormGroup;

  constructor(private fb:FormBuilder) {

    this.form = this.fb.group({
      name:'',
      phoneNumbers: this.fb.array([]) ,
    });
  }
  ngOnInit(){

  }
  get f(){
    return this.form.controls;
  }


  added() : FormArray {
    return this.form.get("phoneNumbers") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      extraPhone: ''
    })
  }

  addQuantity() {
    this.added().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.added().removeAt(i);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
