'use strict';

var user = prompt('What is your name?');
console.log('The name of the user is ' + user);
alert('Hi there, ' + user + '. It is very nice to meet you.');


var daughter = prompt('Does Travis have a daughter?').toLowerCase();
console.log('Have a daughter?', daughter);
if (daughter === 'yes' || daughter === 'y') {
alert('Correct');
} else {
alert('Sorry, but that is incorrect');
}
var Pashto = prompt('Does Travis speak Pashto?').toLowerCase();
console.log('Speak Pashto?:', Pashto);
if (Pashto === 'yes' || Pashto === 'y') {
    alert('Correct');
    } else {
    alert('Sorry, but that is incorrect');
    }

var military = prompt('Was Travis in the Air Force?').toLowerCase();
console.log('In the Air Force?', military);
if (military === 'yes' || military === 'y') {
    alert('Correct');
    } else {
    alert('Sorry, but that is incorrect');
    }

var California = prompt('Is Travis is originally from California?').toLowerCase();
console.log('From CA?', California);
if (California === 'yes' || California === 'y') {
alert('Correct');
} else {
alert('Sorry, but that is incorrect');
}

var Manager = prompt('Was Travis a Mission Manager?').toLowerCase();
console.log('Mission Manager?', Manager);
if (Manager === 'yes' || Manager === 'y') {
    alert('Correct');
    } else {
    alert('Sorry, but that is incorrect');
    }


alert('Well, it was very nice meeting you,' + user + '. I hope you have a lovely day.')