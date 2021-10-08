import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../Models/Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
  }

  addQuestion(
    /*questionId: number,*/
    questions: string, answers: string, favorites: string) {

    let question = new Question();
    /*question.questionId = questionId;*/
    question.questions = questions;
    question.answers = answers;
   /* question.favorites = favorites;*/

    this.questionService.postBootcampQuestion(question)
      .subscribe(result => {
        //logging here
        this.router.navigateByUrl('/bootcampfavorites')
      }, (error: Response) => {
        if (error.status === 404) {
          console.log('Not Found');
          alert('Not Found');
        }

        if (error.status === 500) {

        }
        console.log(error.json);
      });
  }

}
