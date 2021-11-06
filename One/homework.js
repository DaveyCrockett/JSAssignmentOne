//20 variables
let fname = 'David';
let lname = 'Paredes';
let mname = 'Michael';
let age = '32';
let birthday = '12 November 1988';
let goOnWalk = false;
let eatFood = false;
let talkToFriend = false;
let numberOne = 1;
let numberTwo = 2;
let additionResult = numberOne + numberTwo;
let subtractionResult = numberTwo - numberOne;
let multiplicationResult = numberOne * numberTwo;
let divisionResult = numberTwo/numberOne;
let modResult = 35%numberTwo;
let fullName = fname + " " + mname + " " + lname;
let greeting = 'Hello Visitor';
let goodBye = 'Thanks for visiting, Respectfully';
let email = 'DaveWalls329@gmail.com';
let geoLocation = 'California';
let textParagraph = `${greeting}, my first name is ${fname} and my last name is ${lname}. My middle name is ${mname}
 and it's the same as my cousin's first name.I am ${age} years old and my birthday is ${birthday}. Will I go on a walk?: 
 ${goOnWalk}. Will I talk to a friend?: ${!talkToFriend} The first number is ${numberOne} and the second number is ${numberTwo}. 
Add them together you get: ${additionResult}. Subtract those same numbers and you will get: ${subtractionResult}. 
Multiply the beginning two numbers and you get: ${multiplicationResult}. Divide the same two numbers and you will get: ${divisionResult}.
The remainder of 35 divided by ${numberTwo} is ${modResult}.My email is: ${email} and I live in ${geoLocation}. 
Again my full name is: ${fullName}. ${goodBye} ${fullName}.`;

//use doc.write(``) to print each let
document.write(textParagraph);