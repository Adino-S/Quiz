// To keep track where the user is on the text: starts with 0
var pos=0, test, test status, questions, choices, a, b, c, d, correct = 0;

//using multidimensional array
var questions = [
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
    _("test_status").innerHTML = "Question" + (pos+1)+"of"+questions.length;
    questions=questions[pos][0];
    chA=questions [pos][1];
    chB=questions [pos][2];
    chC=questions [pos][3];
    chD=questions [pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    // Append to the data above by adding +=
    test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"br">;
    test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"br">;
    test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"br">;
    test.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"br">
}


var answer;
correct = true;
inCorrect= false;

var response = document.getElementByld ("answer"){

}



JAVASCRIPT
var elStock = document.getElementByld('stock');
elStock.className = inStock;
var el Ship = document .getElementByid('shipping');
elShip.className = shipping ;

function test (form){
  for (j)
}
