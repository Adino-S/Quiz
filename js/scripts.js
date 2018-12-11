var questions = [];
var score = 0;


  for (var i = 0; i<choices.length; i++) {
    var response = radio.check (questions ["i"]);
    if(response == questions[1].correct){
      correct ++;
      alert("Correct!")
    }

    }

var totalMarks= document.querySelectorAll(".correct");

    _("totalMarks").document = "q1" + (pos+1)+"of"+questions.length;
    questions=questions[pos][1];
    q1=questions [pos][1];
    q2=questions [pos][2];
    q3=questions [pos][3];
    q4=questions [pos][4];




// Correct Answer
// ["JavaScript is the same as Java", "True", "False", "B"],
// ["What JavaScript keyword declares a variable?","var", "if", "for", "create", "A"],
// ["How do you create a function in JavaScript?", "function.Myfunction()", "function.myFunction()", "function myFunction()", "C"],
// ["JavaScript is intepreted by ___", "Client", "Server", "Object", "None of the above", "B"]
// [ "JavaScript entities start with _______ and end with _________.", "Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon", "D"]
