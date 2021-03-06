import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../Models/Users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Users[];
  constructor(private router: Router, private userService: UsersService) { }

  currentUser: Users = null;

  ngOnInit() {
    if (!window.localStorage.getItem('user')) {
      this.userService.GetUser()
        .subscribe(result => {
          console.log(result)
          this.users = result;
        })
    } else {
      this.router.navigateByUrl('/bootcampquestions');
    }

  }

  login(user) {
    console.log(user);
    this.currentUser = user;
    window.localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/bootcampquestions');
  }

  logout() {
    window.localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }

  public isLoggedIn() {
    return (this.currentUser != null);
  }

}
