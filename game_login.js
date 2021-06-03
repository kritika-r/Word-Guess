var p1 = localStorage.getItem("Name_of_Player1");
var p2 = localStorage.getItem("Name_of_Player2");
console.log("The player1 is " +p1);
console.log("The player2 is " +p2);
var word_1_caps= "";
var word_1= "";

var p1_score = 0;
var p2_score = 0;
console.log("The player1 score is " +p1_score+ "The player2 score is " +p2_score);

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
    var input_box="<br>Answer:  <input id='input_answer' type='text' placeholder='Enter your answer here'>";
    var check_button = "<br> <button id='check_button' class='btn btn-primary'onclick='check()'>Check</button>";
    var row= first_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
     word_1_caps= document.getElementById("question_input").value;
     word_1= word_1_caps.toLowerCase();
    console.log(word_1);
    document.getElementById("question_input").value = "";
    
}

var question_turn= "Player1";
var answer_turn= "Player2";

function check(){
    
    console.log(word_1);
    var get_answer =document.getElementById("input_answer").value;
    var answer= get_answer.toLowerCase();
    console.log("The answer given is: " +answer);
    if(answer == word_1 ){
        console.log("The player1 score is " +p1_score+ "The player2 score is " +p2_score);

        if(answer_turn == "Player1"){
            p1_score = p1_score + 1;
            console.log("The player1 score is " +p1_score+ "The player2 score is " +p2_score);

            document.getElementById("player1_score").innerHTML = p1_score;

        }
        else{
            p2_score = p2_score + 1;
            console.log("The player1 score is" +p1_score+ "The player2 score is " +p2_score);

            document.getElementById("player2_score").innerHTML = p2_score;
        }
    }
    if(question_turn == "Player1"){
        question_turn= "Player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " +p2;

    }
    else{
        question_turn= "Player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " +p1;
    }
    if(answer_turn == "Player1"){
        answer_turn= "Player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " +p2;

    }
    else{
        answer_turn= "Player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " +p1;
    }
    
    document.getElementById("output").innerHTML= "";
    
}



