// const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators = ['+', '-'];

const question = document.querySelector('.question');
const result = document.querySelector('.result');

const inputEl = document.getElementById('ans');
const element = document.querySelector('h4');

const quizContainer = document.querySelector('.quiz-container');

const submitBtn = document.querySelector('.submit');
const playBtn = document.querySelector('.btn');

const startBtn = document.querySelector('.start-btn');
const start = document.querySelector('.start');


// event listeners

startBtn.addEventListener('click', function () {
    questionAsked();
    
})

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let userInput = parseInt(inputEl.value);

    result.classList.add('show');

    var ansGiven = answerIs();

    console.log(userInput);

    if (userInput === ansGiven) {
        // console.log('yes');
            result.classList.add('right');
            element.textContent = `right answer! ${userInput}`;

    }
    else {
        // console.log('no');
        result.classList.remove('right');
        element.textContent = `wrong answer!`;

    }

    inputEl.value = '';
});

// play again button
playBtn.addEventListener('click', function(){
    start.classList.remove('show-not');
    quizContainer.classList.remove('show');
})

function questionAsked() {

    start.classList.add('show-not');
    quizContainer.classList.add('show');
    result.classList.remove('show');
    
    const operation = operators[Math.floor(Math.random() * 2)];

    const ques = Math.floor(Math.random() * 9);
    const ques2 = Math.floor(Math.random() * 9);
    const ques3 = Math.floor(Math.random() * 9);
    let quesF = parseInt(`${ques}${ques2}`);
    let quesF2 = parseInt(`${ques3}`);
    
    
    globalThis.final = `${quesF} ${operation} ${quesF2}`;

    question.textContent = final;
    return final;
}

function answerIs() {
    const ffinal = final;
    console.log(typeof(ffinal));
    // if(ffinal )
    var final1 = parseInt(ffinal.slice( 0 , 2));
    console.log(final1);
    console.log(typeof(final1));
    
    var final2 = ffinal.slice( 3 ,4);
    console.log(typeof(final2));
    console.log(final2);
    
    var final3 = parseInt(ffinal.slice( 5,6));
    console.log(typeof(final3));
    console.log(final3);
    
    var answer;
    
    if (final2 === '+') {
        answer = final1 + final3;
    }
    else {
        answer = final1 - final3;
    }
    console.log(answer);
    return answer;
}

