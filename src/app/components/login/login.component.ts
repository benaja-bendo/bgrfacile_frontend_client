import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {Store} from "@ngrx/store";
import {login, setLogin} from "../../store/actions/login-page.actions";
import {setProfile} from "../../store/actions/profile-page.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  hide: boolean = true;
  isChecked: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public messageService: MessageService,
    private authService: AuthService,
    private store: Store
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      remember: new FormControl(this.isChecked)

    })
  }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.loginForm.valid) {
      this.messageService.add({
        severity: 'info',
        summary: 'formulaire invalide',
        detail: `entrez votre email et mot de passe`
      });
      this.getClass(true);
      return;
    }
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.signIn(loginData).subscribe({
        next:(res:any)=>{

          localStorage.setItem('access_token', res.data.access_token);

          this.store.dispatch(setLogin(loginData));

          this.authService.getUserProfile(res.data.user.id).subscribe((res) => {

            this.messageService.add({
              severity: 'success',
              summary: 'connection success',
              detail: `Welcome ${this.loginForm.value.email}`
            });

            this.authService.currentUser = res.data;

            this.store.dispatch(setProfile(res.data));

            localStorage.setItem('user', JSON.stringify({user:res.data}));

            setTimeout(()=>{
              this.router.navigate([`profile/${res.data.slug}`]).then(r=>{})
            },1500);

          });
        },
        error:err => console.error(err)
      })



  }

  get formControlName() {
    return this.loginForm.controls;
  }

  get email() {
    return this.loginForm!.get("email")
  }

  get password() {
    return this.loginForm!.get("password")!
  }

  get remember() {
    return this.loginForm!.get("remember")!
  }

  getClass(event: any) {
    let attribute = {};
    if (event) {
      attribute = {"ng-invalid ng-dirty": true};
    }
    return attribute;
  }

  displayPassword() {
    this.hide = !this.hide;
  }

  onCleanEmailField() {
    if (this.loginForm.value.email)
      this.loginForm.setValue(
        {
          email: '',
          password: this.loginForm.value.password,
          remember: this.loginForm.value.remember
        }
      )
  }
}
