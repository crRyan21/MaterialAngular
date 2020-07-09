import { ResponseCreate } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate ={
    name: '',
    job: ''
  }
  response: ResponseCreate;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  save(){
    this.userService.createUsers(this.request).subscribe(res =>{
      this.response = res;
    });
  }

}
