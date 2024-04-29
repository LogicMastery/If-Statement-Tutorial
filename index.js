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
    alert("Good job! you woke up early this time")
}else{
    alert("You woke up late! you better hurry up! and get dressed already!")
}

// If...Else If...Else Statement
var grade = 90;
var total = Number(prompt("Enter your total grade: "))

if(grade <= total){
    alert("Good job! you got an A-grade! keep it up!")
}else if(total >= 80){
    alert("Good job! You got a B-grade!")
}else if (total >= 70){
    alert("Please make some more efforts on your grade, but you did a pretty good job! You got a C-grade")
}else{
    alert("Your in the failing grade! You better study harder!")
}

// Switch statement
var day = 3;