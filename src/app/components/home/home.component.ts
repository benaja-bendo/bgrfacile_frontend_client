import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {CycleService} from "../../services/cycle.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  items: MenuItem[] = [];

  isLoggin : boolean = false

  constructor(
    private courseService:CourseService,
    private cycleService:CycleService,
    private router:Router,
    private authService:AuthService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataInit()
    this.isLoggin = this.authService.isLoggedIn
  }

  ngOnDestroy() {
  }

  dataInit(){
    let slug = "404";
    if (this.authService.isLoggedIn ){
      slug = this.authService.getCurrentUser()?.slug!;
    }
    this.items = [
      {
        label: 'Mon profile',
        icon: 'pi pi-fw pi-user',
        routerLink:slug==="404"?'login':`profile/${slug}`,
      },
      {
        label:'Parametres',
        icon:'pi pi-fw pi-cog',
        routerLink:'parametres'
      },
      {separator: true},
      {
        label: 'Se Déconnecter',
        icon: 'pi pi-fw pi-power-off',
        routerLink:'logout',
      }
    ]
  }
}
