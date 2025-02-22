const questions=[
    {
        question: "What country has the highest life expectancy?",
        answers:[
            {text:"a) Japan",correct:false},
            {text:"b) Hong kong",correct:true},
            {text:"c) China",correct:false},
            {text:"d) India",correct:false},
        ]
    },
    {
        question: "What artist has the most streams on Spotify?",
        answers:[
            {text:"a) Drake",correct:true},
            {text:"b) Tayor swift",correct:false},
            {text:"c) Alan walker",correct:false},
            {text:"d) Zayn",correct:false},
        ]
    },
    {
        question: "What company was initially known as Blue Ribbon Sports? ",
        answers:[
            {text:"a) Adidas",correct:false},
            {text:"b) Nike",correct:true},
            {text:"c) Sketchers",correct:false},
            {text:"d) Puma",correct:false},
        ]
    },
    {
        question: "What year was the United Nations established?",
        answers:[
            {text:"a) 1990",correct:false},
            {text:"b) 1980",correct:false},
            {text:"c) 1945",correct:true},
            {text:"d) 1995",correct:false},
        ]
    }
];

const questionElement =document.getElementById("question");
const answerbuttons =document.getElementById("answer-buttons");
const nextbutton =document.getElementById("next-btn");

let currentQuestionIndex =0;
let score=0;

function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion()
} 
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML = questionNo +"."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}   

function resetState(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const iscorrect  =selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;        
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`; 
    nextbutton.innerHTML= "play Again";
    nextbutton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
});

startquiz();
