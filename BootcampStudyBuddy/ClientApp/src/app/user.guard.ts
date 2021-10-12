import { CanActivate } from "@angular/router";

export class UserGuard implements CanActivate {
  canActivate() {
    if (window.localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
