const questions=[
    {
        question: " What is the oldest professional sports league in the United States?",
        answers:[
            {text:"a)Nhl",correct:false},
            {text:"b)Mlb",correct:true},
            {text:"c)Nba",correct:false},
            {text:"d)Nfl",correct:false},
        ]
    },
    {
        question:" Which athlete is known as The Greatestof All Time?",
        answers:[
            {text:"a)LeBron James",correct:true},
            {text:"b)Michael Jordan",correct:false},
            {text:"c)Tiger Woods",correct:false},
            {text:"d)Bolt",correct:false},
        ]
    },
    {
        question:"What country is the most successful nation in Olympic history?",
        answers:[
            {text:"a)Russia",correct:false},
            {text:"b)United States",correct:true},
            {text:"c)China",correct:false},
            {text:"d)Germany",correct:false},
        ]
    },
    {
        question:"Which country hosted the 2014 FIFA World Cup?",
        answers:[
            {text:"a)France",correct:false},
            {text:"b)Germany",correct:false},
            {text:"c)Brazil",correct:true},
            {text:"d)South Africa",correct:false},
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






            


    
