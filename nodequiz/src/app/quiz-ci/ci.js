function quizCi(){
 
    //starting score of 0
    var score = 0;
        //combine questions by group, getting on answer per group, holds up to 10 questions    
        for(a = 1; a < 11; a+=1) {
            question= document.getElementsByName('q'+a);
            for(b = 0; b < question.length; b+=1) {
                input = question[b];
                // 2 conditions to be met: value must be 1 and it must be checked
                if(input.value === "10" && input.checked==true) {
                    score+=10;
                }
            }
        }
    alert(score)  
  }

