import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  responseUsers: ResponseUsers
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res)
  }

}
