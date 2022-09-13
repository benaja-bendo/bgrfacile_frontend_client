import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components-models/logo/logo.component';
import { CardCourseComponent } from './components-models/card-course/card-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {CoursModule} from "./modules/cours/cours.module";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import {NgxPaginationModule} from "ngx-pagination";
import {BibliothequeComponent} from "./components/bibliotheque/bibliotheque.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {InputTextModule} from "primeng/inputtext";
import {AuthInterceptor} from "./services/ authconfig.interceptor";
import { ProfileComponent } from './components/profile/profile.component';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CardCourseComponent,
    NotfoundComponent,
    HomeComponent,
    BibliothequeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CoursModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    TriStateCheckboxModule,
    CheckboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
