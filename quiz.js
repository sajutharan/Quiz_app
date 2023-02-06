(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1.JavaScript language is an _______?",
        answers: {
          a: "Object-oriented",
          b: "Object-based",
          c: "procedural",
          d: "None  of the above"
        },
        correctAnswer: "a"
      },
      {
        question: "2.Which of the following keywords is used to define a variable in Javascript?",
        answers: {
          a: "var",
          b: "let",
          c: "both of A and B",
          d: "Non of the above"
        },
        correctAnswer: "c"
      },
      {
        question: "3.Which of the following methods is used to access HTML elements using Javascript?",
        answers: {
          a: "getElementById()",
          b: "getElementByClass()",
          c: "Both A and B",
          d: "none of the above"
        },
        correctAnswer: "c"
      },
      {
        question: "4.Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: {
          a: "throws an error",
          b: "ignore the statements",
          c: "Gives a warning",
          d: "None of the above"
        },
        correctAnswer: "b"
      },
      {
        question: "5.How can a datatype be declared to be a constant type?",
        answers: {
          a: "const",
          b: "var",
          c: "let",
          d: "constant"
        },
        correctAnswer: "a"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();
  