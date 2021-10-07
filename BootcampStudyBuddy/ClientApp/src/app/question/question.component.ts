import { Component, OnInit } from '@angular/core';
import { Question } from '../Models/Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.GetBootcampQuestions()
      .subscribe(result => {
        this.questions = result;
      })
  }

}
