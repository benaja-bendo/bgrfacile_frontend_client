import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {Store} from "@ngrx/store";
import {login, setLogin} from "../../store/actions/login-page.actions";

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
    private authService: AuthService
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
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.signIn(loginData)

    this.messageService.add({
      severity: 'success',
      summary: 'Connexion reussie',
      detail: `Bienvenu(e) ${this.loginForm.value.email}`
    });


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
