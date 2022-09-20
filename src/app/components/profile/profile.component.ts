import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowEditForm() {
    this.isVisible = true;
  }

  onChangeEditComponentState($event: boolean) {
    this.isVisible = $event;
  }
}
