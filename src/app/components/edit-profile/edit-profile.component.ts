import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editForm:any
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.editForm = formBuilder.group({
      username:new FormControl('styveLioumba',[Validators.required]),
      firstname:new FormControl('styve',[Validators.required]),
      lastname:new FormControl('Lioumba',[Validators.required]),
      genre:new FormControl('M',[Validators.required,Validators.maxLength(1)]),
      phone:new FormControl('0766498664',[Validators.required]),
      address:new FormControl('3 rue chantecrit 33300 bordeaux',[Validators.required]),
      email:new FormControl('styvelioumba@gmail.com',[Validators.required,Validators.email])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  displayPassword() {
    this.hide = !this.hide;
  }

  getClass(event:any) {
    let attribute ={};
    switch (event.getAttribute('formControlName')){
      case "username":
        attribute={"ng-invalid ng-dirty":(this.username.touched && this.username.invalid)};
        break;
      case "firstname":
        attribute={"ng-invalid ng-dirty":(this.firstname.touched && this.firstname.invalid)};
        break;
      case "lastname":
        attribute={"ng-invalid ng-dirty":(this.lastname.touched && this.lastname.invalid)};
        break;
      case "genre":
        attribute={"ng-invalid ng-dirty":(this.genre.touched && this.genre.invalid)};
        break;
      case "phone":
        attribute={"ng-invalid ng-dirty":(this.phone.touched && this.phone.invalid)};
        break;
      case "address":
        attribute={"ng-invalid ng-dirty":(this.address.touched && this.address.invalid)};
        break;
      case "email":
        attribute={"ng-invalid ng-dirty":(this.email.touched && this.email.invalid)};
        break;
    }
    return attribute;
  }

  get formControlName(){
    return this.editForm.controls;
  }

  get username(){
    return this.editForm!.get("username")
  }
  get firstname(){
    return this.editForm!.get("firstname")
  }
  get lastname(){
    return this.editForm!.get("lastname")
  }
  get genre(){
    return this.editForm!.get("genre")
  }
  get phone(){
    return this.editForm!.get("phone")
  }
  get address(){
    return this.editForm!.get("address")
  }
  get email(){
    return this.editForm!.get("email")
  }
}
