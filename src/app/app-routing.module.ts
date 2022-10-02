import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {HomeComponent} from "./components/home/home.component";
import {BibliothequeComponent} from "./components/bibliotheque/bibliotheque.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LogOutComponent} from "./components/log-out/log-out.component";
import {AuthGuard} from "./services/auth.guard";
import {DetailCoursComponent} from "./components/detail-cours/detail-cours.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {SchoolComponent} from "./components/school/school.component";
import {DetailSchoolComponent} from "./components/detail-school/detail-school.component";
import {SchoolBaseComponent} from "./components/school-base/school-base.component";

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'',component:HomeComponent,
    children:[
      {path:'bibliotheque',title:'all courses',component:CoursesComponent,
      children:[
        {path:'',title:'library',component:BibliothequeComponent},
        {path:':id/:slug',title:'detail course',component:DetailCoursComponent,canActivate:[AuthGuard]}
      ]},
      {path:'ecoles',title:'all schools',component:SchoolBaseComponent,
      children:[
        {path: '',title: 'school', component: SchoolComponent},
        {path: ':id/:slug',title: 'detail school', component: DetailSchoolComponent,canActivate: [AuthGuard]},
      ]},
      {path:'profile/:slug',title:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
      {path:'**',redirectTo:'404'}
    ]
  },
  {path:'login',title:'login',component:LoginComponent},
  {path:'logout',title:'logout',component:LogOutComponent},
  {path:'register',title:'register',component:RegisterComponent},
  {path:'404',title:'not found page',component:NotfoundComponent},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
