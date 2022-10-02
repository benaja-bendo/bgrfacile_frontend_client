import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {
  @Input()
  course:Course = {} as Course

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  onClickCardItem() {
    const navigationExtras: NavigationExtras = {
      state: this.course,
      relativeTo: this.route
      };

    this.router.navigate([`${this.course.id}`,`${this.course.slug}`],navigationExtras).then (r =>{})
  }
}
