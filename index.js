var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question("Hey! whats your username: ")
console.log(chalk.blue("Welcome! "+userName+" Let's see How well you know Mohit ji"));
console.log("----------------------");
var score = 0;
console.log(chalk.green("There are total 10 question and one question is equal to one mark. There is no negative marking. Let begin!"))
console.log("----------------------");

function play(question,option,answer)
{
  console.log(question);
  console.log(option);
  var userAns = readlineSync.question("Enter the correct option  : ");
  if(userAns.toUpperCase() === answer)
  {
    console.log(chalk.green("right!"));
    score = score+1;
  }
  else{
    console.log(chalk.red("wrong!"));
    console.log("The correct option is "+answer);
  }

  console.log("Current score: ",score)
  console.log("----------------------");
}

var arr = [
  {question:"Q1. If Mohit could go anywhere, it would be...",
  option:"A. Toronto  B. London  C. Melbourne  D. New York",
  answer:"D"},
  {question:"Q2. What is Mohit's favorite TV show?",
  option:"A. CID  B. CNBC stocks  C. Doremon  D. Don't watch",
  answer:"D"},
  {question:"Q3. Mohit is affraid of .",
  option:"A. tiger  B. yellow bee  C. Honey bee  D. Dog",
  answer:"B"},
  {question:"Q4. When did Mohit learn to swim...",
  option:"A. 5th class  B. 7th class  C. 9th class  D. 11th class",
  answer:"C"},
  {question:"Q5. On which date mohit's birthday comes",
  option:"A. 11  B. 9  C. 26  D. 10",
  answer:"B"},
  {question:"Q6. What is mohit's favourite food?",
  option:"A. Dosa  B. Kari Chawal  C. Shahi Paneer  D. Mix vegetable",
  answer:"B"},
  {question:"Q7. What is mohit's eye color",
  option:"A. Black  B. Brown  C. Dark Black  D. Dark Brown",
  answer:"A"},
  {question:"Q8. What is mohit's favouite sweet?",
  option:"A. Home maid peda  B. Home made barfi  C. Kheer  D. All The options",
  answer:"D"},
  {question:"Q9. How often do mohit use facebook",
  option:"A. 2 days  B. after 1 day  C. after 6 hours  D. after 3 days",
  answer:"D"},
  {question:"Q10. Mohit likes to have.....",
  option:"A.Juice  B. Bear  C. Whisky  D. Segret",
  answer:"A"}
]
for(i=0;i<arr.length;i++)
{
  var obj = arr[i];
  play(chalk.yellow(obj.question),obj.option,obj.answer)
}
console.log("Thank You for taking the quiz");
console.log(userName+"! Your Total Score out of 10 is : "+score);