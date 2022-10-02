import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Navigation, ParamMap, Router} from "@angular/router";
import {Course} from "../../models/course";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css']
})
export class DetailCoursComponent implements OnInit {
  course:Course;
  course_id:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private location:Location
  ) {
    this.course = {}
    const navigation = router.getCurrentNavigation()

    if (navigation){
      this.course = navigation.extras.state as Course;
    }

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(param:ParamMap)=>{
        this.course_id = param.get('id');
        console.log(this.course_id);
      },
      error:err => console.error(err)
    });
  }

  getCourse():void{


  }

  onGoBack() {
    this.location.back();
  }
}
