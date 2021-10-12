import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UsersComponent } from './users/users.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserGuard } from './user.guard';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    QuestionComponent,
    AddQuestionComponent,
    UsersComponent,
    FavoritesComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'bootcampquestions', component: QuestionComponent, canActivate: [UserGuard] },
      { path: 'add-question', component: AddQuestionComponent, canActivate: [UserGuard] },
      { path: 'users', component: UsersComponent },
      { path: 'favorites', component: FavoritesComponent,}
    ])
  ],
  providers: [
    UserGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
