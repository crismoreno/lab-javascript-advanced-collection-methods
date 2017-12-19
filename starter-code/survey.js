'use strict';


var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];


function chooseAnswer(){
    var response = [Math.floor(Math.random() * responses.length)];
    var answer = responses[response];

    return answer;
}

function multiplyByTen(){
  var tenAnswers = [];
    for (var ix = 0; ix < 10; ix++){
      tenAnswers.push(chooseAnswer());
    }
    
    return tenAnswers;
}

function multiplyByFive(){
  var fiftyAnswers = [];
    for (var ix = 0; ix < 5; ix++){
      fiftyAnswers.push(multiplyByTen());
    }
    
    return fiftyAnswers;
}

console.log(multiplyByFive());