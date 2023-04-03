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
    return `${rowData.name.last} ${rowData.name.first}`
  }

  ngOnInit(): void {
    const saved = localStorage.getItem('params');

    if (saved) {
      this.findUsersByOptions(saved.split(','))
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
    const savedParams = localStorage.getItem('genderOptionVal') + ','
      + localStorage.getItem('locationOptionVal') + ','
      + localStorage.getItem('emailOptionVal') + ','
      + localStorage.getItem('phoneOptionVal');

    localStorage.setItem('params', savedParams);

    if (savedParams !== null) {
      this.userService.getAllByFilteredOptions(savedParams).subscribe({
        next: (users) => {
          this.users = users.results;
        },
        error: (err) => console.error('Error:', err)
      })
    } else {
      this.userService.getAllByFilteredOptions($event.join()).subscribe({
        next: (users) => {
          this.users = users.results;
        },
        error: (err) => console.error('Error:', err)
      })
    }
  }
}
