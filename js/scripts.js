var totalMarks= document.querySelectorAll(".correct");
  for (var i = 0; i<choices.length; i++) {
    response = radio.check;
}

}
  }
    _("totalMarks").innerHTML = "q1" + (pos+1)+"of"+questions.length;
    questions=questions[pos][1];
    q1=questions [pos][1];
    q2=questions [pos][2];
    q3=questions [pos][3];
    q4=questions [pos][4];

  }
function checkAnswer (){
  choices= document.getElementsByName('choices');
  // for loop to rub over the array and see what the user's choice is
  for (var 1=0; 1<choices.length; i++){
    if (choices[i].checked){
      choice=choices[i].value;
    }
  }
  if (choice==questions[pos][0]){
    correct ++;
    pos ++;
    renderQuestion ();
  }
}

// ["JavaScript is the same as Java", "True", "False", "B"],
// ["What JavaScript keyword declares a variable?","var", "if", "for", "create", "A"],
// ["How do you create a function in JavaScript?", "function.Myfunction()", "function.myFunction()", "function myFunction()", "C"],
// ["JavaScript is intepreted by ___", "Client", "Server", "Object", "None of the above", "B"]
// [ "JavaScript entities start with _______ and end with _________.", "Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon", "D"]
