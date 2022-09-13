import { Component, OnInit } from '@angular/core';
import {Course} from "../../models/course";
import {Cycle} from "../../models/cycle";
import {Subscription} from "rxjs";
import {CourseService} from "../../services/course.service";
import {CycleService} from "../../services/cycle.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {

  courses:Array<Course> = new Array<Course>();
  cycles:Array<Cycle> = new Array<Cycle>();
  courseSubscription:Subscription = new Subscription()
  cycleSubscription:Subscription = new Subscription()
  p: number = 1;

  constructor(
    private courseService:CourseService,
    private cycleService:CycleService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourse();
    this.getCycle();
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

}
