const questions=[
    {
        question:"Sanji is a character in which anime?",
        answers:[
            {text:"a)Naruto",correct:false},
            {text:"b)one Peice",correct:true},
            {text:"c)Gintama",correct:false},
            {text:"d)Inuyasha",correct:false},
        ]
    },
    {
        question: "What is the name of the protagonist in the anime Naruto?",
        answers:[
            {text:"a)Naruto Uzumaki",correct:true},
            {text:"b)Itachi Uchiha",correct:false},
            {text:"c)Rock Lee ",correct:false},
            {text:"d)Sasuke Uchiha",correct:false},
        ]
    },
    {
        question:" Which is the main character of Death Note?",
        answers:[
            {text:"a)L Lawliet",correct:false},
            {text:"b)Light Yagami",correct:true},
            {text:"c)Misa Amane",correct:false},
            {text:"d)Ryuk",correct:false},
        ]
    },
    {
        question:"Who is the main character of the anime Fullmetal Alchemist?", 
        answers:[
            {text:"a)Roy Mustang",correct:false},
            {text:"b)Winry Rockbell",correct:false},
            {text:"c)Edward Elric",correct:true},
            {text:"d)Alphonse Elric",correct:false},
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






            
