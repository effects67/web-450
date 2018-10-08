import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SlideComponent} from "./slide/slide.component";

// quizzes

import { QuizCiComponent } from './quiz-ci/quiz-ci.component';
import { QuizMicroComponent } from './quiz-micro/quiz-micro.component';
import { QuizTechComponent } from './quiz-tech/quiz-tech.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'slide', component: SlideComponent },
  { path: 'quiz_ci', component: QuizCiComponent },
  { path: 'quiz_stream', component: QuizTechComponent },
  { path: 'quiz_micro', component: QuizMicroComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
