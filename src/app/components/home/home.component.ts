import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import {Observable, Subscription} from "rxjs";
import {CycleService} from "../../services/cycle.service";
import {Cycle} from "../../models/cycle";
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  courses:Array<Course> = new Array<Course>();
  cycles:Array<Cycle> = new Array<Cycle>();
  courseSubscription:Subscription = new Subscription()
  cycleSubscription:Subscription = new Subscription()
  p: number = 1;

  items: MenuItem[] = [];

  constructor(
    private courseService:CourseService,
    private cycleService:CycleService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourse();
    this.getCycle();
    this.dataInit()
  }

  getCourse():void{
    this.courseSubscription = this.courseService.courses.subscribe({
        next: (courses: Array<Course>) => this.courses = courses,
        error: err => console.error(err)
      }
    )
  }

  getCycle():void{
    this.cycleSubscription = this.cycleService.cycles.subscribe({
      next:(cycles:Array<Cycle>)=>this.cycles = cycles,
      error: err => console.error(err)
    })
  }

  ngOnDestroy() {
    this.courseSubscription.unsubscribe();
    this.cycleSubscription.unsubscribe();
  }

  onClickMatiere(name:string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([`/?cycle=${name}`], {
      queryParams: {
        cycle: name
      },
      queryParamsHandling: 'preserve', // remove to replace all query params by provided
    }).then(r => console.log(r))
  }
  dataInit(){
    this.items = [
      {
        label: 'Mon profile',
        icon: 'pi pi-fw pi-user',
        routerLink:'profile/styveLioumba',
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
        routerLink:'/'
      }
    ]
  }
}
