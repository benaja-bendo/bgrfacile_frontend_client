import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {setLogin} from "../../store/actions/login-page.actions";
import {Store} from "@ngrx/store";
import {setProfile} from "../../store/actions/profile-page.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any
  hide:boolean = true

  constructor(
    private formBuilder:FormBuilder,
    private messageService:MessageService,
    private authService:AuthService,
    private router: Router,
    private store:Store
  ) {
    this.registerForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.registerForm.valid){
      this.messageService.add({severity:'info', summary:'formulaire invalide', detail:`verifiez tous vos champs`});
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.messageService.add({severity:'error', summary:'formulaire invalide', detail:`le mot de passe n'est pas identique`});
      return;
    }

    const data = {
      name:this.registerForm.value.name,
      email:this.registerForm.value.email,
      password:this.registerForm.value.confirmPassword,
    }

    this.authService.signUp(data).subscribe({
      next:res => {

        localStorage.setItem('access_token', res.data.access_token);

        this.store.dispatch(setLogin({email:data.email,password:data.password}));

        this.authService.getUserProfile(res.data.user.id).subscribe((res) => {
          this.messageService.add({severity:'success', summary:'Register success', detail:`Welcome ${res.data.name}`});

          this.authService.currentUser = res.data;

          this.store.dispatch(setProfile(res.data));

          localStorage.setItem('user', JSON.stringify({user:res.data}));

          setTimeout(()=>{
            this.router.navigate([`profile/${res.data.slug}`]).then(r=>{})
          },1500);

        });

      },
      error:err =>{
        console.error(err)
        this.messageService.add({severity:'error', summary:'Register failed', detail:`Welcome ${this.registerForm.value.email}`});
      }

    })

  }

  get formControlName(){
    return this.registerForm.controls;
  }

  get name(){
    return this.registerForm!.get("name")
  }
  get email(){
    return this.registerForm!.get("email")
  }
  get password(){
    return this.registerForm!.get("password")!
  }
  get confirmPassword(){
    return this.registerForm!.get("confirmPassword")!
  }

  getClass(event:any) {
    let attribute ={};
    switch (event.getAttribute('formControlName')){
      case "name":
        attribute={"ng-invalid ng-dirty":(this.name.touched && this.name.invalid)};
        break;
      case "email":
        attribute={"ng-invalid ng-dirty":(this.email.touched && this.email.invalid)};
        break;
      case "password":
        attribute={"ng-invalid ng-dirty":(this.password.touched && this.password.invalid)};
        break;
      case "confirmPassword":
        attribute={"ng-invalid ng-dirty":(this.confirmPassword.touched && this.confirmPassword.invalid) || (this.confirmPassword.touched && this.registerForm.value.password !== this.registerForm.value.confirmPassword)};
        break;
    }
    return attribute;
  }

  displayPassword() {
    this.hide = !this.hide;
  }

  onCleanEmailField(event:any) {
    switch (event.getAttribute('formControlName')) {
      case "name":
        if (this.registerForm.value.name)
          this.registerForm.setValue(
            {
              name:'',
              email: this.registerForm.value.email,
              password:this.registerForm.value.password,
              confirmPassword:this.registerForm.value.confirmPassword
            }
          )
        break;

      case "email":
        if (this.registerForm.value.email)
          this.registerForm.setValue(
            {
              name:this.registerForm.value.name,
              email: '',
              password:this.registerForm.value.password,
              confirmPassword:this.registerForm.value.confirmPassword
            }
          )
        break;
    }
  }
}
