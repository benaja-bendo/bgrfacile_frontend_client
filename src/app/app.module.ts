import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CardCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
