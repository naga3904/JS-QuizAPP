let quiz_data = [
    {
        question : "Which is the best programing language",
        a:"Python",
        b:"Java",
        c:"Javascript",
        d:"obj.C",
        correct_ans:"Python"
    },
    {
        question : "Which is the capital of India",
        a:"New Delhi",
        b:"Hyderabad",
        c:"Bangalore",
        d:"Mangalore",
        correct_ans:"New Delhi"
    },
    {
        question : "Which is the National Animal of India",
        a:"Tiger",
        b:"Cheetah",
        c:"Lion",
        d:"Elephat",
        correct_ans:"Tiger"
    },
    {
        question : "How many Alphabets are there in English",
        a:"20",
        b:"24",
        c:"26",
        d:"30",
        correct_ans:"26"
    },
    {
        question : "What is the name of Indias famous MARS mission",
        a:"Mars orbiter mission",
        b:"Mission of mars",
        c:"Mars venture",
        d:"Invade Mars",
        correct_ans:"Mars orbiter mission"
    },
]

let current_question = 0;
const quizquestion = document.getElementById('question');
const submitbtn = document.getElementById('submit-btn');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const container = document.getElementById('container');
let buttons = document.getElementsByClassName('option');

const len_of_Questions = quiz_data.length;

let answers = [];

let score = 0;

loadQuiz();
function loadQuiz(){
    if(current_question<len_of_Questions){
        const Question = quiz_data[current_question];  
        quizquestion.innerText = Question.question;
        a_text.innerHTML = Question.a;
        b_text.innerHTML = Question.b;
        c_text.innerHTML = Question.c;
        d_text.innerHTML = Question.d;
        current_question++;
        document.querySelectorAll('.option').forEach(item => {
            item.style.backgroundColor='#cdaddc';
        });
    }
    else{
        submitbtn.innerText="Submit";
        loadScore();
    }
}

document.querySelectorAll('.option').forEach((item,index) => {
    item.addEventListener('click',function get_val(){
        const correct_answer = quiz_data[current_question-1].correct_ans;
        console.log(current_question);
        answers.push(item.innerHTML);
        if(item.innerHTML===correct_answer){
            item.style.backgroundColor='#b7ffbf';
        }
        else if(item.innerHTML!==correct_answer){
            item.style.backgroundColor='red';
        }
    })
  });

const calculate_score = (answers)=>{
    for(i=0;i<answers.length;i++){
        const answer = quiz_data[i].correct_ans;
        if(answers[i]==answer){
            score++
        }
    }
    return score;
}

const loadScore = ()=>{
    if(submitbtn.innerText=='Submit'){
        submitbtn.addEventListener('click',()=>{
            if(answers.length===quiz_data.length){
                container.innerHTML = `Your Score is ${calculate_score(answers)}.0/5.0`;
            }else{
                alert('Select One Option per question or else the quiz will not be evaluated')
            }     
        });
    }
}
