import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUserInfo} from "../../models/IUserInfo";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit{

  users: IUserInfo[];

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.userService.getAll().subscribe( users => this.users = users.results)
  }

}
