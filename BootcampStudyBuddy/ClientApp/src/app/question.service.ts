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

  postBootcampQuestion(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.apiUrl, question);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
