class Question
{
    constructor(question,answers,correctAnswer)
    {
        this.quest = question;
        this.answers = answers;
        this.correct = correctAnswer;
};

}
function printQues()
{
    console.log(ques3.quest);
    console.log(ques3.answers);
}
 function checkAns()
 {
    let userAnswer= parseInt(prompt("Answer using numbers provided"));
     if(userAnswer === 1)
     {
         alert("Correct! Grit n Grind!");
     }
 }
 let ques1= new Question("How many dogs do you have?", "[2,3,5]", 1);
 let ques2= new Question("Where do you live?", "[Memphis, Atlanta, Vegas]", 0);
let ques3 = new Question("What is my favorite team?","[0.Phoenix Suns, 1.Memphis Grizzlies, 2.LA Lakers]",1);

printQues(ques3);
checkAns(ques3);
let questArray=[];
questArray.push(ques3, ques1, ques2);
console.log(questArray);
let correctIndex= Math.floor(Math.random()*questArray);
let userAnswer=prompt("which index number is correct?");
