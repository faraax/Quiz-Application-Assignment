var questions = [{
    "question": `Inside which HTML element do we put the JavaScript?`,
    "answer" : `All of above`,
    "options" : [ 
        `&lt;script&gt;`,
        `&lt;body&gt;`,
        `&lt;head&gt;`,
        `All of above`
    ],
},
{

    "question": `Where is the correct place to insert a JavaScript?`,
    "answer" : `All of above`,
    "options" : [ 
        `&lt;script&gt;`,
        `&lt;body&gt;`,
        `&lt;head&gt;`,
        `All of above`
    ],
},
{

    "question": `What is the correct syntax for referring to an external script called "xxx.js"?`,
    "answer" : `app.js`,
    "options" : [ 
        `script.js`,
        `app.js`,
        `index.js`,
        `All of above`
    ],
},
{

    "question": `The external JavaScript file must contain the &lt;script&gt; tag.`,
    "answer" : `True`,
    "options" : [ 
        `True`,
        `False`
    ],
}
 ]
function displayQuestion (e) {
    // Display Questions
    var question = document.getElementById('question');
    question.innerHTML = questions[e].question;
    // Display Options    
    var option = document.getElementsByClassName('opt');
    for (var i = 0;i < option.length; i++) {
        option[i].innerHTML = questions[e].options[i];
    }
}

var counter = 0;
var score = 0;

function next() {
    counter++;
    // validate(counter)
    displayQuestion(counter); 
    removeClass();
}

function activeClass(e) {
    removeClass();
    e.classList.add("active");
}

function removeClass(e) {
    var active = document.getElementsByClassName("active");
    for(var i = 0; i <active.length; i++)
    console.log(active[i].classList.remove('active'))
 }

//  function validate(e) {
//     var active = document.getElementsByClassName("active");
//     if (active[0].innerHTML === questions[e].answer) {
//         score++;
//         console.log(score);
//     }
//  }
