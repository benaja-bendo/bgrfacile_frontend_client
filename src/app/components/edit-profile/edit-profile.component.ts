import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editForm:any
  hide: boolean = true;

  currentUser : User;

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService
  ) {
    this.currentUser = authService.getCurrentUser();

    this.editForm = formBuilder.group({
      username:new FormControl(this.currentUser.name,[Validators.required]),
      firstname:new FormControl(this.currentUser.first_name,[Validators.required]),
      lastname:new FormControl(this.currentUser.last_name,[Validators.required]),
      genre:new FormControl(this.currentUser.genre,[Validators.required,Validators.maxLength(1)]),
      phone:new FormControl(this.currentUser.phone,[Validators.required]),
      email:new FormControl(this.currentUser.email,[Validators.required,Validators.email])
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
  get email(){
    return this.editForm!.get("email")
  }
}
