import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUserInfo} from "../../models/IUserInfo";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users: IUserInfo[];

  constructor(private userService: UserService) {
  }

  transformName(rowData: any) {
    return `${rowData.name.last} ${rowData.name.first}`;
  }

  ngOnInit(): void {
    const savedParams = JSON.parse(localStorage.getItem('SEARCH_PARAMS') as string);
    if (savedParams) {
      this.findUsersByOptions(savedParams);
    } else {
      this.getResults();
    }
  }

  getResults() {
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users.results;
      },
      error: (err) => console.error('Error:', err)
    })
  }

  findUsersByOptions($event: string[]) {
    if ($event.length !== 0) {
      this.userService.getAllByFilteredOptions($event.join(',')).subscribe({
        next: (users) => {
          this.users = users.results;
        },
        error: (err) => {
          console.error('Error:', err)
        }
      })
    } else {
      this.removeParams();
      this.getResults();
    }
  }

  removeParams() {
    localStorage.removeItem('SEARCH_PARAMS')
  }
}
