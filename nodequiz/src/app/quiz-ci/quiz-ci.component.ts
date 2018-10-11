import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-ci',
  templateUrl: './quiz-ci.component.html',
  styleUrls: ['./quiz-ci.component.css']
})
export class QuizCiComponent {

score=0;

onSubmit(formData){
  if (formData.checkGroup.q1){
    console.log(this.score+=10);
    }
    else console.log(this.score+=0);

  if (formData.checkGroup.q2){
    console.log(this.score+=10)
    }
    else console.log(this.score+=0)
  }
  

}