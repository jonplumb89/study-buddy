import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = "https://localhost:5001/api/Users";
  constructor(private httpClient: HttpClient) { }

  GetUser() {
    return this.httpClient.get<Users[]>(this.apiUrl);
  }
}
