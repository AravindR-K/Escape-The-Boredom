const questions=[
    {
        question: "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
        answers:[
            {text:"a)11",correct:false},
            {text:"b)12",correct:true},
            {text:"c)16",correct:false},
            {text:"d)37",correct:false},
        ]
    },
    {
        question:"What is the next prime number after 5?",
        answers:[
            {text:"a)7",correct:true},
            {text:"b)9",correct:false},
            {text:"c)11",correct:false},
            {text:"d)17",correct:false},
        ]
    },
    {
        question:"20+(90÷2) is equal to:",
        answers:[
            {text:"a)55",correct:false},
            {text:"b)65",correct:true},
            {text:"c)50",correct:false},
            {text:"d)60",correct:false},
        ]
    },
    {
        question:"Solve: 300 – (150×2)",
        answers:[
            {text:"a)1",correct:false},
            {text:"b)5",correct:false},
            {text:"c)0",correct:true},
            {text:"d)10",correct:false},
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


       



            


    
