function addUser(){
    player_1= document.getElementById("player1_login").value;
    player_2= document.getElementById("player2_login").value;

    localStorage.setItem("Name_of_Player1", player_1);
    localStorage.setItem("Name_of_Player2", player_2);

    window.location="game_page.html";

}