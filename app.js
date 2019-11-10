'use strict';

var user = prompt('What is your name?');
console.log('The name of the user is ' + user);
alert('Hi there, ' + user + '. It is very nice to meet you.');
var total = 0;

function questionOne() {
  var daughter = prompt('Does Travis have a daughter?').toLowerCase();
console.log('Have a daughter?', daughter);
if (daughter === 'yes' || daughter === 'y') {
alert('Correct');
total++;
} else {
alert('Sorry, but that is incorrect');
}
}
function questionTwo() {
var Pashto = prompt('Does Travis speak Pashto?').toLowerCase();
console.log('Speak Pashto?:', Pashto);
if (Pashto === 'yes' || Pashto === 'y') {
    alert('Correct');
    total++;
    } else {
    alert('Sorry, but that is incorrect');
    }
  }
function questionThree() {
var military = prompt('Was Travis in the Air Force?').toLowerCase();
console.log('In the Air Force?', military);
if (military === 'yes' || military === 'y') {
    alert('Correct');
    total++;
    } else {
    alert('Sorry, but that is incorrect');
    }
  }
function questionFour() {
var California = prompt('Is Travis is originally from California?').toLowerCase();
console.log('From CA?', California);
if (California === 'yes' || California === 'y') {
alert('Correct');
total++;
} else {
alert('Sorry, but that is incorrect');
}
}
function questionFive() {
var Manager = prompt('Was Travis a Mission Manager?').toLowerCase();
console.log('Mission Manager?', Manager);
if (Manager === 'yes' || Manager === 'y') {
    alert('Correct');
    total++;
    } else {
    alert('Sorry, but that is incorrect');
    }
  }
function questionSix () {
var number;
var counter = 1;
    
    while(number !== 13) {
      number = parseInt(prompt('what is your fav number?'));
    
      if (number < 13) {
        alert('you guessed too low');
        counter++;
      } else if (number > 13) {
        alert('you guessed too high');
        counter++;
      } else if (number === NaN || number === null) {
        alert('please enter a real number');
        counter++;
      } else if (number === 13) {
        alert('Congratulations, that is correct.');
        total++;
      }
      
      if (counter === 5) {
          alert('So sorry, but you have used all of your guesses, the answer is 13.');
          break;
      }
    }
    console.log('current count:', counter);    
  }
function questionSeven() {
var worst = ['broncos', 'chiefs', 'chargers'];
var answer = prompt('What is the worst team in the AFC West?').toLowerCase();
var chances = 1;
// Check out video at approximately one hour in
  
    for (var i = 0; i < worst.length; i++) {
      console.log('worst team:', worst[i]);
      
      if (answer === worst[i]) {
          alert('I agree, ' + worst[i] + ' are really bad');
          total++;
          break;
      }   else if (answer !== worst[i]) {
      alert('Sorry that is incorrect');
      chances++;
      questionSeven();
      }

    if (chances === 7) {
    alert('So sorry, but you have used all of your guesses, the answer is the Broncos, the Chiefs, or the Chargers.');
    break;
    }
      
  }
  
}
questionOne ();
questionTwo ();
questionThree ();
questionFour ();
questionFive ();
questionSix ();
questionSeven ();



alert('Congratulation, you answered, ' + total + 'answers correct.');
alert('Well, it was very nice meeting you,' + user + '. I hope you have a lovely day.')