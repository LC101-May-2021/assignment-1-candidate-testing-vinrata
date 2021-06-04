const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
  let grade = 0;
  let numOfQuizQuestions = 5;
  let gradePercentage = 0;
  let statusText = "";
let question = 'Who was the first American woman in space? ';
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 'What is the minimum crew size for the ISS?'];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ["","","","",""];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Candidate Name: ");
 

}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
     for (let i = 0; i < questions.length; i++) {
      candidateAnswers[i] = input.question(questions[i])
        console.log("Your Answer: "+ candidateAnswers[i])
        console.log("Correct Answer: "+ correctAnswers[i])
        console.log("\n")      
   }
}
  
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (let i = 0; i < questions.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase())
         grade++;
   }

let oldGrade = grade;
 console.log(grade);
 if (grade = 0){
   grade = 0
 }
  if (grade = 1){
   grade = 20
 }
  if (grade = 2){
   grade = 40
 }
  if (grade = 3){
   grade = 60
 }
  if (grade = 4){
   grade = 80
 }
  if (grade = 5){
   grade = 100
 }
 console.log(grade);
 return grade;
    //statusText = ">>> Status: PASS <<<";
    //}else{
    //  statusText = ">>> Status: FAILED <<<";
    //}
      //(Number of Correct Answers) / (Number of Quiz Questions) * 100
      gradePercentage = ((oldGrade)/(numOfQuizQuestions))*100;

      console.log(`>>> Overall Grade: ${gradePercentage}% (${oldGrade} of ${numOfQuizQuestions} responses correct) <<<`);
      console.log(statusText);
   
      
}
//>>> Overall Grade: 40% (2 of 5 responses correct) <<<


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
 
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};