const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["1) Who was the first American woman in space?  ","2) True or false: 5 kilometer == 5000 meters?	","3) (5 + 3)/2 * 10 = ?	","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?  ", "5) What is the minimum crew size for the ISS?	"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ["","","","",""];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Candidate Name: ");
 

}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswers[0] = input.question(questions[0]);
    if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()){
      console.log("Your Answer: "+ candidateAnswers[0])
      console.log("Correct Answer: "+ correctAnswers[0])
      console.log("\n")
      }else{
        console.log("Your Answer: "+ candidateAnswers[0])
        console.log("Correct Answer: "+ correctAnswers[0])
        console.log("\n")
      }
    
  candidateAnswers[1] = input.question(questions[1]);
  if (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()){
      console.log("Your Answer: "+ candidateAnswers[1])
      console.log("Correct Answer: "+ correctAnswers[1])
      console.log("\n")
      }else{
        console.log("Your Answer: "+ candidateAnswers[1])
        console.log("Correct Answer: "+ correctAnswers[1])
        console.log("\n")
      }

  candidateAnswers[2] = input.question(questions[2]);
if (candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()){
      console.log("Your Answer: "+ candidateAnswers[2])
      console.log("Correct Answer: "+ correctAnswers[2])
      console.log("\n")
      }else{
        console.log("Your Answer: "+ candidateAnswers[2])
        console.log("Correct Answer: "+ correctAnswers[2])
        console.log("\n")
      }

  candidateAnswers[3] = input.question(questions[3]);
if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()){
      console.log("Your Answer: "+ candidateAnswers[3])
      console.log("Correct Answer: "+ correctAnswers[3])
      console.log("\n")
      }else{
        console.log("Your Answer: "+ candidateAnswers[3])
        console.log("Correct Answer: "+ correctAnswers[3])
        console.log("\n")
      }

  candidateAnswers[4] = input.question(questions[4]);
if (candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()){
      console.log("Your Answer: "+ candidateAnswers[4])
      console.log("Correct Answer: "+ correctAnswers[4])
      console.log("\n")

      }else{
        console.log("Your Answer: "+ candidateAnswers[4])
        console.log("Correct Answer: "+ correctAnswers[4])
        console.log("\n")
      }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let numOfQuizQuestions = 5;
 if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()){
      grade ++;
      console.log("Question 1 correct.")
      }else {
        console.log("Question 1 incorrect.")
      }
 if (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()){
      grade ++;
      console.log("Question 2 correct.")
      }else {
        console.log("Question 2 incorrect.")
      }
 if (candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()){
      grade ++;

      console.log("Question 3 correct.")
      }else {
        console.log("Question 3 incorrect.")
      }
 if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()){
      grade++;
      console.log("Question 4 correct.")
      }else {
        console.log("Question 4 incorrect.")
      }     
 if (candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()){
      grade++;
      console.log("Question 5 correct.")
      console.log(">>> Overall Grade: "+( ((grade)/numOfQuizQuestions)*100 ) + "% ("+grade + " of 5 responses correct) <<<")

        if (grade >= 4){
          console.log(">>> Status: PASS <<<")
        }else{
          console.log(">>> Status: FAILED <<<")
        }

      }else {
        console.log("Question 5 incorrect.")
      console.log(">>> Overall Grade: "+( ((grade)/numOfQuizQuestions)*100 ) + "% ("+grade + " of 5 responses correct) <<<")   
        if (grade >= 4){
          console.log(">>> Status: PASS <<<")
        }else{
          console.log(">>> Status: FAILED <<<")
        }           
      }
}

//(Number of Correct Answers) / (Number of Quiz Questions) * 100




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