import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {
  @Input()
  course:Course = {} as Course

  constructor() { }

  ngOnInit(): void {
  }

}
