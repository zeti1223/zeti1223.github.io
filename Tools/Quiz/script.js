const quizData = [
    {
        question: "Melyik két cég megalapításában játszott közre Steve Jobs?",
        a: "Apple, IBM",
        b: "Apple, Pixar",
        c: "Apple, Disney",
        d: "IBM, Pixar",
        correct: "b"
    },
    {
        question: "Hány kerülete van Budapestnek?",
        a: "22",
        b: "25",
        c: "11",
        d: "23",
        correct: "d"
    },
    {
        question: "Mit jelöl a Hyundai logoja?",
        a: "Két embert, ahogy kezet fognak",
        b: "Egy létrát",
        c: "Az alapító nevének első betűjét",
        d: "Oroszlánt",
        correct: "a"
    },
    {
        question: "Mennyi 4!-2?",
        a: "8",
        b: "2",
        c: "22",
        d: "24",
        correct: "c"
    },
    {
        question: "Hogyan írjuk helyesen?",
        a: "Jégpálya",
        b: "Jégpája",
        c: "Lyégpálya",
        d: "Lyégpája",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>${score}/${quizData.length} kérdésre válaszoltál helyesen!</h2>
                <button onclick="location.reload()">Újrakezdés</button>
            `;
        }
    }
});