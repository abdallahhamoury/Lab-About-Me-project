'use strict';



let user = prompt('what\'s your name? ')

alert('welcome '+ user);



let username = prompt('Is my name Abdulrahman?').toUpperCase();

switch (username) {

  case 'YES':
  case 'Y':
  console.log('correct');
 
  alert('Correct');

  break;

    case 'NO':
    case 'N':

  alert('My name is Abdulrahman');
  break;

  default:
  alert('you need to write yes or no ');
  break;
}


let age = prompt(' What is my Age now If I was Born in 1995  ');
switch (age) {
case '26':
  console.log('correct');
  alert('correct');

  break;


}




let password = prompt('write your name here to continue ')

while(password !== user){

  password = prompt('you can\'t if you don\'t write it as before ' + user + ' ;)' );


}




let gym = prompt('Can I lift up 200 KG?').toUpperCase();

switch (gym){

case 'YES':
case 'Y':
  console.log('correct');
  alert('thats correct ❚█══█❚ ');

  break;

case 'NO':
case 'N':

  alert('I can left more than that ❚█══█❚ ? ');
  console.log('wrong');
  break;


}

let languages = prompt('am I speak more than two languages ').toUpperCase();

switch (languages){

case('YES'):
case('Y'):
  alert('correct, I speak English,French,Arabic');
  console.log('correct');
  break;

case ('NO'):
case ('N'):
  alert('Wrong, I speak 3 languages' );
  console.log('wrong');
  
  break;


}



alert('Thank your for your time '+ user);