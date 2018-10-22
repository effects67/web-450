import { Component, ViewChild } from '@angular/core';
// import {Popup} from 'ng2-opd-popup';


@Component({
  selector: 'app-quiz-ci',
  templateUrl: './quiz-ci.component.html',
  styleUrls: ['./quiz-ci.component.css']
})

export class QuizCiComponent {


/* this broke my page
  @ViewChild('popup1') popup1:Popup;

    ClickButton(){
      this.popup1.options = {
        header: "Test complete ",
        color: "#5cb85c", 
        widthProsentage: 40,
        animationDuration: 2, 
        showButtons: true, 
        confirmBtnContent: "Test Done", 
        cancleBtnContent: "Cancel", 
        confirmBtnClass: "btn btn-default", 
        cancleBtnClass: "btn btn-default", 
        animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };

      this.popup1.show(this.popup1.options);
    }


    function quiz(){
    // blank rank var that will be assigned at the end of the string
    var rank="";  
    //starting score of 0
    var score = 0;
        //combine questions by group, getting on answer per group, holds up to 10 questions    
        for(a = 1; a < 11; a+=1) {
            question= document.getElementsByName('q'+a);
            for(b = 0; b < question.length; b+=1) {
                input = question[b];
                // 2 conditions to be met: value must be 1 and it must be checked
                if(input.value === "1" && input.checked==true) {
                    score+=1;
                }
            }
    */

    
}