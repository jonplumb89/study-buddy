import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'logout-button',
  templateUrl: './logout-button.component.html'
})
export class LogoutButtonComponent {

  constructor(private router: Router) { }

  logout() {
    console.log('logout hit')
    window.localStorage.clear();
    this.router.navigateByUrl('/')
  }
}
