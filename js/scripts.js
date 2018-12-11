// var questions = [];
// var score = 0;
//
$(document).ready(function(){
  $("#checkAnswer").click(function(){
    var answer=[]
    answer.push($("input:radio[name=q1]:checked").val());
    answer.push($("input:radio[name=q2]:checked").val());
    answer.push($("input:radio[name=q3]:checked").val());
    answer.push($("input:radio[name=q4]:checked").val());
    answer.push($("input:radio[name=q5]:checked").val());

      var total = 0;
      if (answer[0] == "10"){
        total += 10;
      }
      if (answer[1] == "10"){
        total += 10;
      }
      if (answer[2] == "10"){
        total += 10;
      }
      if (answer[3] == "10"){
        total += 10;
      }
      if (answer[4] == "10"){
        total += 10;
      }
    $("#total").val(total);
  })
  $("#checkAnswer").click(function() {
    $(".well").hide();
    $("#hide").show();
  });
})







// Correct Answer
// ["JavaScript is the same as Java", "True", "False", "B"],
// ["What JavaScript keyword declares a variable?","var", "if", "for", "create", "A"],
// ["How do you create a function in JavaScript?", "function.Myfunction()", "function.myFunction()", "function myFunction()", "C"],
// ["JavaScript is intepreted by ___", "Client", "Server", "Object", "None of the above", "B"]
// [ "JavaScript entities start with _______ and end with _________.", "Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon", "D"]
