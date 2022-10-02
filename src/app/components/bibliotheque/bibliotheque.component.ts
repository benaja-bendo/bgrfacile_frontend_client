import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import {MenuItem, TreeNode} from "primeng/api";
import {ActivatedRoute, NavigationExtras, ParamMap, Router} from "@angular/router";
import {CycleService} from "../../services/cycle.service";
import {Cycle, Level, Matiere} from "../../models/cycle";

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {

  courses:Course[] = [];
  cycles:TreeNode<Cycle>[] = []
  matieres:Matiere[]  = [];
  courseSubscription:Subscription = new Subscription()
  cycleSubscription:Subscription = new Subscription()
  p: number = 1;

  breadcrumb_items: MenuItem[];
  panelMenu_items: MenuItem[];

  home: MenuItem;
  selectedMatiere: Matiere = {};

  constructor(
    private courseService:CourseService,
    private cycleService:CycleService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.breadcrumb_items = [];
    this.panelMenu_items = [];
    this.home = {icon: 'pi pi-home', routerLink: '/bibliotheque'};
  }

  ngOnInit(): void {
    this.getCourse();
    this.getCycle();
    this.getRouteParameterLink();
  }

  getRouteParameterLink(){
    this.route.queryParamMap.subscribe({
      next:(param:ParamMap)=>{

        this.breadcrumb_items = [];

        param.keys.map((key:string)=>{
          let value = param.get(key);
          if (value){
            this.breadcrumb_items=[...this.breadcrumb_items, {
                label:value
            }]
          }
        })

      },
      error:err => console.error(err)
    })
  }

  getCourse():void{
    this.courseSubscription = this.courseService.getCourses().subscribe({
        next: (courses$: any) => {
          this.courses = courses$.data as Course[]
        },
        error: (err:any) => console.error(err)
      }
    )
  }

  getCycle():void{
    this.cycleService.cycles.subscribe({
      next:(res:any)=>{
        (res.data as Cycle[]).map((cycle:Cycle, index) => {
          this.cycles = [...this.cycles,
            {
              label:cycle.name,
              data:cycle,
              expandedIcon: "pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              children:[],
              selectable:false,
              leaf: false
            }]
        })
      },
      error:err => console.error(err)
    })


  }

  ngOnDestroy() {
    this.courseSubscription.unsubscribe();
    this.cycleSubscription.unsubscribe();
  }


  /***
   *
   * @param $event
   */
  loadNode($event: any) {
    const cycle = $event.node.data as Cycle;
    $event.node.children = [];
    cycle.levels?.map((level:Level)=>{
      $event.node.children=[...$event.node.children,
        {
          label:level.name,
          data:level,
          expandedIcon: "pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          children:[],
          leaf: true
        }
        ];
    });
  }


  /***
   *
   * @param $event
   */
  onItemSelect($event: any) {
    this.matieres=[];
    const navigationExtra : NavigationExtras ={
      queryParamsHandling:'merge',
      queryParams:{
        cycle:$event.node.parent.data.slug,
        level:$event.node.data.slug
      }
    }
    this.router.navigate([`bibliotheque`], navigationExtra).then(r => this.matieres=$event.node.data.matieres)
  }

  /***
   *
   * @param $event
   */
  onBreadItemClick($event: any) {
    if($event.item.icon.toLowerCase() === 'pi pi-home'.toLowerCase()){
      this.matieres=[];
    }
  }

  /***
   *
   * @param $event
   */
  onRadioItemSelected($event: any) {
    const navigationExtra : NavigationExtras ={
      queryParamsHandling:'merge',
      queryParams:{
        matiere:$event.value.slug
      }
    }
    this.router.navigate([`bibliotheque`], navigationExtra).then(r =>{})

  }
}
