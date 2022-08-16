import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front_client';
  loading: boolean = false;
  panelOpenState = false;

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  nextStep(): void {
    this.panelOpenState = true;
  }
}
