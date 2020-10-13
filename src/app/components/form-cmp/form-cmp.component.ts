import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-form-cmp',
  templateUrl: './form-cmp.component.html',
  styleUrls: ['./form-cmp.component.css']
})
export class FormCmpComponent implements OnInit {

  name = 'Angular';

  phoneNoForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.phoneNoForm = this.fb.group({
      phoneNo: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      phoneNumbers: this.fb.array([]) ,
    });
  }
  ngOnInit(){

  }
  get f(){
    return this.phoneNoForm.controls;
  }


  phoneNumber() : FormArray {
    return this.phoneNoForm.get("phoneNumbers") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      extraPhone: ''
    })
  }

  addQuantity() {
    this.phoneNumber().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.phoneNumber().removeAt(i);
  }

  onSubmit() {
    console.log(this.phoneNoForm.value);
  }

}
