var p1 = localStorage.getItem("Name_of_Player1");
var p2 = localStorage.getItem("Name_of_Player2");
console.log("The player1 is " +p1);
console.log("The player2 is " +p2);

var p1_score = 0;
var p2_score = 0;

document.getElementById("player1_name").innerHTML = p1 + ": ";
document.getElementById("player2_name").innerHTML = p2 + ": ";
document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;
document.getElementById("player_question").innerHTML ="Question turn: " +p1;
document.getElementById("player_answer").innerHTML ="Answer turn: " +p2;

function send(){
    var word_caps= document.getElementById("question_input").value;
    var word= word_caps.toLowerCase();
     console.log("The word is: " +word);
     var c1 = word.charAt(1);
     console.log("The first word removed is " +c1);
     var divide_word= Math.floor(word.length/2);
     var c2 = word.charAt(divide_word);
     console.log("The second word removed is " +c2);
     var last_minus = word.length - 1;
     var c3 = word.charAt(last_minus);
     console.log("The last word removed is " +c3);

     var r1= word.replace(c1,"_ ");
     var r2= r1.replace(c2,"_ ");
     var r3= r2.replace(c3,"_ ");

    var first_word="<h4 id='word_display'> Q. " +r3+"</h4>";
    var input_box="<br>Answer:  <input type='text' placeholder='Enter your answer here'>";
    var check_button = "<br> <button id='check_button' class='btn btn-primary'onclick='check()'>Check</button>";
    var row= first_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("question_input").value = "";
    
}


