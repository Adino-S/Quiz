// To keep track where the user is on the text: starts with 0
var pos=0, test, test status, questions, choices, a, b, c, d, correct = 0;

//using multidimensional array
var questions = $("input:radio[name=questions]:checked").val()[
  ["JavaScript is the same as Java", "True", "False", "B"],
  ["What JavaScript keyword declares a variable?","var", "if", "for", "create", "A"],
  ["How do you create a function in JavaScript?", "function.Myfunction()", "function.myFunction()", "function myFunction()", "C"],
  ["JavaScript is intepreted by ___", "Client", "Server", "Object", "None of the above", "B"]
  [ "JavaScript entities start with _______ and end with _________.", "Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon", "D"]
];


function _(x){
  return document.getElementByid(x);
}
function renderQuestion(){
  test= _("questions");
  if (pos >= questions.length){
    test.innerHTML= <h2>You got "+correct+" of "+questions.length+";questions correct</h2>;
    correct=0;
    return false;
  }
    _("totalMarks").innerHTML = "Question" + (pos+1)+"of"+questions.length;
    questions=questions[pos][0];
    chA=questions [pos][1];
    chB=questions [pos][2];
    chC=questions [pos][3];
    chD=questions [pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    // Append to the data above by adding +=
    test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"<br>";
    test.innerHTML += "<input type=onClick name='choices' value='D'>"+chD+"<br>";
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

var flavor = $("input:radio[name=flavor]:checked").val();
