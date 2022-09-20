import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {HomeComponent} from "./components/home/home.component";
import {BibliothequeComponent} from "./components/bibliotheque/bibliotheque.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'',component:HomeComponent,
    children:[
      {path:'bibliotheque',title:'library',component:BibliothequeComponent},
      {path:'profile/:username',title:'profile',component:ProfileComponent},
      {path:'**',redirectTo:'404'}
    ]
  },
  {path:'login',title:'login',component:LoginComponent},
  {path:'register',title:'register',component:RegisterComponent},
  {path:'404',title:'not found page',component:NotfoundComponent},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
