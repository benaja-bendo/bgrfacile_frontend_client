import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components-models/logo/logo.component';
import { CardCourseComponent } from './components-models/card-course/card-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
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
import {SplitterModule} from "primeng/splitter";
import {TabViewModule} from "primeng/tabview";
import {ImageModule} from "primeng/image";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import {ScrollTopModule} from "primeng/scrolltop";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {AvatarModule} from "primeng/avatar";
import {TieredMenuModule} from "primeng/tieredmenu";
import { StoreModule } from '@ngrx/store';
import {loginReducer} from "./store/reducers/login.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LogOutComponent } from './components/log-out/log-out.component';
import {profileReducer} from "./store/reducers/profile.reducer";
import { DetailCoursComponent } from './components/detail-cours/detail-cours.component';
import { CoursesComponent } from './components/courses/courses.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {TagModule} from "primeng/tag";
import {PanelMenuModule} from "primeng/panelmenu";
import {TreeModule} from "primeng/tree";
import {RadioButtonModule} from "primeng/radiobutton";
import { CardEcoleComponent } from './components-models/card-ecole/card-ecole.component';
import { SchoolComponent } from './components/school/school.component';
import { DetailSchoolComponent } from './components/detail-school/detail-school.component';
import { SchoolBaseComponent } from './components/school-base/school-base.component';

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
    ProfileComponent,
    EditProfileComponent,
    LogOutComponent,
    DetailCoursComponent,
    CoursesComponent,
    CardEcoleComponent,
    SchoolComponent,
    DetailSchoolComponent,
    SchoolBaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    TriStateCheckboxModule,
    CheckboxModule,
    SplitterModule,
    TabViewModule,
    ImageModule,
    ScrollTopModule,
    ScrollPanelModule,
    RippleModule,
    DropdownModule,
    AvatarModule,
    TieredMenuModule,
    StoreModule.forRoot({login: loginReducer, profile: profileReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BreadcrumbModule,
    TagModule,
    PanelMenuModule,
    TreeModule,
    RadioButtonModule,
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
