const quizData = [
    {
        question: "What year show javascript",
        a: 1995,
        b: 1996,
        c: 1997,
        d: 1998,
        correct: "a"
    },
    {
        question: "Whats is the popular language programmer in the world",
        a: "Javascript",
        b: "C++",
        c: "Python",
        d: "java",
        correct: "a"
    },
    {
        question: "Whats HTML used for",
        a: "for UI | UX",
        b: "for scripting",
        c: "for Backend",
        d: "for database",
        correct: "b"
    },
    {
        question: "What name html is",
        a: "HyperText Markup Language",
        b: "Cascading Style Sheets",
        c: "Styled components",
        d: "axios",
        correct: "a"
    }
]
const Q = document.getElementById("Q")
const text_a = document.getElementById("text-a")
const text_b = document.getElementById("text-b")
const text_c = document.getElementById("text-c")
const text_d = document.getElementById("text-d")
const next = document.getElementById("next")
const answerls = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")


let currentQuiz = 0;
let score = 0;
function loadQuestion() {
    deSelected();
    const currentQuestionData = quizData[currentQuiz]

    Q.innerText = currentQuestionData.question
    text_a.innerText = currentQuestionData.a
    text_b.innerText = currentQuestionData.b
    text_c.innerText = currentQuestionData.c
    text_d.innerText = currentQuestionData.d
}
loadQuestion();

function getSelected() {
    let answer = undefined;

    answerls.forEach(answerl => {
       if(answerl.checked){
           answer = answerl.id
       }
    });
    return  answer;
}

function deSelected() {
    answerls.forEach(answerl => {
        answerl.checked = false;
     })
}

next.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuestion();
        }else{
           quiz.innerHTML = `<h3>Your answered correctly at ${score}/${quizData.length} questions</h3>`
        }
    }
})
