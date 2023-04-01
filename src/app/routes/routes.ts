import {Routes} from "@angular/router";
import {UsersTableComponent} from "../components/users-table/users-table.component";
import {AboutComponent} from "../components/about/about.component";


export const routes: Routes = [
  {
    path:'', component: UsersTableComponent
  },
  {
    path: 'about', component: AboutComponent
  }
]
