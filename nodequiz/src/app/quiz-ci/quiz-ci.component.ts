import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-ci',
  templateUrl: './quiz-ci.component.html',
  styleUrls: ['./quiz-ci.component.css']
})
export class QuizCiComponent {

score=0;

onSubmit(value:any){


    console.log(value);

}

}