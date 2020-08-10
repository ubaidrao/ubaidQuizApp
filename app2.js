window.onload = function () {
    show(0);
    start();

}

let userName = sessionStorage.getItem("Name")
let wel = document.getElementById('userNameId')
wel.innerHTML = userName

// question and answer in object
 
var questions = [{
    id: 1,
    question: "Who is the inventor of Blub",
    answer: "Thomas Adison",
    options: [
        "Dennis Ritchie",
        "Thomas Adison",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the founder of pakistan",
    answer: "Quaid e Azam Muhammad Ali",
    options: [
        "Dennis Ritchie",
        "Quaid e Azam Muhammad Ali",
        "James Gosling",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the CEO of Google?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Sundar Pichai",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventor of java?",
    answer: "James Goslin",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "James Goslin"
    ]

}

]



// next question button
let question_count = 0;
var point = 0;
var c = 0;
function next() {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    // user answer

 
    if (user_answer == questions[question_count].answer) {
        point += 10;
        c++;
        sessionStorage.setItem("Correct", c)
        var a = user_answer + " is " + "RIGHT";
        console.log(a)
        sessionStorage.setItem("points", point)
    } else {
        var a = user_answer + " is " + "wrong"
        console.log(a)
        point += 0

    }
    console

    if (question_count == questions.length - 1) {
        stop()
        location.href = "end.html"
        return;
    }


    question_count++;
    show(question_count)
}


function show(e) {
    var ques = document.getElementById('questions')
    ques.innerHTML = `
    <h2 class="text">Q ${question_count + 1 + " : "}${questions[e].question}</h2>
        <ul class="ul" >
            <li class="option" >${questions[e].options[0]}</li>
            <li class="option">${questions[e].options[1]}</li>
            <li class="option">${questions[e].options[2]}</li>
            <li class="option">${questions[e].options[3]}</li>
        </ul>
        `;

    toggleActive()


}

function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add('active')

        }

    }
}

// counter

var getCounter = document.getElementById("counter")
var ms = 100;
var s = 60;
var m = 5;
var interval;

function watch() {
    return (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}



function timer() {
    getCounter.innerHTML = watch();
    --ms
    if (ms == 0) {
        --s;
        ms = 100;
    } else if (s == 0) {
        --m;
        s = 60
    }
}
function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearTimeout(interval)
}
