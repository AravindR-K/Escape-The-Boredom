const questions=[
    {
        question: "What is the real name of the X-Men character Wolverine?",
        answers:[
            {text:"a) Tony Stark ",correct:false},
            {text:"b) Logan Howlett",correct:true},
            {text:"c) Peter Parker",correct:false},
            {text:"d) Bruce Banner",correct:false},
        ]
    },
    {
        question: "In the Marvel Universe, what is the surname of Thor?",
        answers:[
            {text:"a) Odinson",correct:true},
            {text:"b) Richards",correct:false},
            {text:"c) Stark",correct:false},
            {text:"d) Parker",correct:false},
        ]
    },
    {
        question:" Who was the first African-American superhero created by Marvel Comics?", 
        answers:[
            {text:"a) Thor",correct:false},
            {text:"b) Black Panther",correct:true},
            {text:"c) Hulk",correct:false},
            {text:"d) Iron man",correct:false},
        ]
    },
    {
        question: "Who is the ruler of Wakanda in the Marvel Universe?",
        answers:[
            {text:"a) Blackpanther",correct:false},
            {text:"b) Thor",correct:false},
            {text:"c) Strom",correct:true},
            {text:"d) Proffesor X",correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

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



