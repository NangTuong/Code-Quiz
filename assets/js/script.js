// javascript questions array
var questions = [
    {
        question1: "Commonly used data types do NOT include:",
        answer: ["strings","booleans","alerts","numbers"],
        correct: "alerts"
        
    },
    {
        question2: "The condition in an if / else statement is enclosed with ______.",
        answer: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis"
        
        
    },
    {
        question3: "Arrays in JavaScript can be used to store ______.",
        answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question4: "String values must be enclosed within ______ when being assigned to variables.",
        answer: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
        
    }
    ]
    
    var startButton = document.getElementById("start-btn")
    
    var button1 = document.getElementById("question-1-button")
    var button2 = document.getElementById("question-2-button")
    var button3 = document.getElementById("question-3-button")
    var button4 = document.getElementById("question-4-button")
    
    var sec = 60

    // timer 
    document.addEventListener('DOMContentLoaded', () => {
        //variable
        var timeLeftDisplay = document.getElementById("seconds")
        var startBtn = document.getElementById("start-btn")
        
        
        //timer function
        function timer () {
            setInterval(function(){
                if(sec <= 0 ) {
                    clearInterval(sec = 0)
                }
                timeLeftDisplay.innerHTML = sec 
                sec -=1
            }, 1000)
        }
    
        startBtn.addEventListener("click", timer)
        
    })
    
    // function to start quiz
    function quiz () {
        startButton.onclick = function () {
            document.getElementById("begin").setAttribute("class", "hide")
            document.getElementById("quiz").removeAttribute("class")
        }
    
        //question 1
        function start (){
            document.getElementById("question").innerHTML = questions[0].question1
    
            document.getElementById("question-1-button").innerHTML = questions[0].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[0].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[0].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[0].answer[3]
            
            document.getElementById("quiz-btn").addEventListener("click", second)
    
            button1.addEventListener("click", function () {
              
                });
    
          
    
        }
        start()
        
        //question 2
        function second (){
            document.getElementById("question").innerHTML = questions[1].question2
    
            document.getElementById("question-1-button").innerHTML = questions[1].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[1].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[1].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[1].answer[3]
    
            document.getElementById("quiz-btn").addEventListener("click", third)
    
            addEventListener("click", function () {
             
                });
    
           
    
        }
        
        //question 3
        function third () {
            document.getElementById("question").innerHTML = questions[2].question3
    
            document.getElementById("question-1-button").innerHTML = questions[2].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[2].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[2].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[2].answer[3]
    
            document.getElementById("quiz-btn").addEventListener("click", fourth)
    
        }
    
        //question 4
        function fourth () {
            document.getElementById("question").innerHTML = questions[3].question4
    
            document.getElementById("question-1-button").innerHTML = questions[3].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[3].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[3].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[3].answer[3]
        }
    }
    quiz()