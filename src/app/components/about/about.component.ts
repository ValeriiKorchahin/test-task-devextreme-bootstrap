import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUserInfo} from "../../models/IUserInfo";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: IUserInfo

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getOneRandomUser().subscribe(user => {
      this.user = user.results[0];
    })
  }

  goBack() {
    history.back();
  }
}
