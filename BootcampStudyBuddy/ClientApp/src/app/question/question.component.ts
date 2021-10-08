import { Component, OnInit } from '@angular/core';
import { Question } from '../Models/Question';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[];
  constructor(private questionService: QuestionService, private router: Router, private favoriteService: FavoritesService) { }

  ngOnInit() {
    this.questionService.GetBootcampQuestions()
      .subscribe(result => {
        this.questions = result;
      })
  }

  show(id: number) {
    var x = document.getElementById(id.toString());
    var button = document.getElementById(id.toString() + "_button")
    if (x.getAttribute("answer") === "false") {
      for (let q of this.questions) {
        if (q.questionId == id) {
          x.innerHTML = q.answers;
          break;
        }
      }
      x.setAttribute("answer", "true");
      button.innerHTML = "hide";
    } else {
      x.innerHTML = "Click the show answer button to view the answer!";
      button.innerHTML = "show";
      x.setAttribute("answer", "false");
    }
    
  }

  dueces(id: number) {
    var index = -1;
    for (let q of this.questions) {
      if (id === q.questionId) {
        index = this.questions.indexOf(q);
        break;
      }
    }
    if (index > -1) {
      this.questions.splice(index, 1);
    }
  }

  addQuestion(
    /*questionId: number,*/
    questions: string, answers: string) {

    let question = new Question();
    /*question.questionId = questionId;*/
    question.questions = questions;
    question.answers = answers;
    /* question.favorites = favorites;*/

    this.favoriteService.postBootcampFavorites(question)
      .subscribe(result => {
        //logging here
        this.router.navigateByUrl('/bootcampquestions')
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
