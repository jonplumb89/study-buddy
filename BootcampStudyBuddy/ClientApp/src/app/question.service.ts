import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  apiUrl: string = "https://localhost:5001/api/BootcampQuestions";
  constructor(private httpClient: HttpClient) {}

  GetBootcampQuestions() {
    return this.httpClient.get<Question[]>(this.apiUrl);
  }
}
