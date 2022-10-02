import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser!: User;

  constructor(
    private autService:AuthService
  ) {
  }

  ngOnInit(): void {
    if (this.autService.isLoggedIn) {
      this.currentUser=this.autService.getCurrentUser()
    }
  }

  onShowEditForm() {
  }

  onLogOut() {
    this.autService.doLogout()
  }
}
