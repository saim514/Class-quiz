var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

function send()
{
    var get_word = document.getElementById("Word").value;
    word = get_word.toLowerCase();
    console.log("Word in lower case is " + word);
    
    charAt_1 = word.charAt(1);
    console.log(charAt_1);
    
    length_divide_2 = Math.floor(word.length/2);
    charAt_2 = word.charAt(length_divide_2);
    console.log(charAt_2);
    
    length_minus_1 = word.length - 1;
    charAt_3 = word.charAt(length_minus_1);
    console.log(charAt_3);
    
    remove_charAt_1 = word.replace(charAt_1,"_");
    remove_charAt_2 = remove_charAt_1.replace(charAt_2,"_");
    remove_charAt_3 = remove_charAt_2.replace(charAt_3,"_");
    console.log(remove_charAt_3);
    
    question_word = "<h4 id = "word_display">Q."+remove_charAt_3+"</h4>";
    input_box = "<br> Answer = <input id= "input_check_box" type = "text">";
    check_button = "<br><br><button class = "btn btn-info" onclick="check()">Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}