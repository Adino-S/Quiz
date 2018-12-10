$(document).ready(function() {
       $("button#green").click(function() {
         $("body").removeClass();
         $("body").addClass("green-background");
         alert("Terrible choice");
       });

       $("button#yellow").click(function() {
         $("body").removeClass();
         $("body").addClass("yellow-background");
       });

       $("button#red").click(function() {
         $("body").removeClass();
         $("body").addClass("red-background");
       });
});
