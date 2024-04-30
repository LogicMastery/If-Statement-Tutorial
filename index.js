// If statements
var num = 25
var EnterNumber = Number(prompt("Enter a valid number? "))

if(num < EnterNumber){
    console.log("That's a good number!")
}

// If and Else statements
var hour = 7
var Time = Number(prompt("What time did you wake up? "))

if(hour > Time || Time == 7){
    console.log("Good job! you woke up early this time")
}else{
    console.log("You woke up late! you better hurry up! and get dressed already!")
}

// If...Else If...Else Statement
var grade = 90;
var total = Number(prompt("Enter your total grade: "))

if(grade <= total){
    console.log("Good job! you got an A-grade! keep it up!")
}else if(total >= 80){
    console.log("Good job! You got a B-grade!")
}else if (total >= 70){
    console.log("Please make some more efforts on your grade, but you did a pretty good job! You got a C-grade")
}else{
    console.log("Your in the failing grade! You better study harder!")
}

// Switch statement
var day = Number(prompt("What day is it? "))
var dayname;

switch(day){
    case 1: 
    dayname = "Monday"
    console.log("It's Monday!")
    break;
    case 2:
    dayname = "Tuesday"
    console.log("It's Tuesday!")
    break;
    case 3:
    dayname = "Wednesday"
    console.log("It's Wednesday!")
    break;
    case 4:
    dayname = "Thursday"
    console.log("It's Thursday!")
    break;
    case 5:
    dayname = "Friday"
    console.log("It's Friday!")
    break;
}

