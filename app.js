function func(){
    document.getElementById('p1').innerHTML = "Player 1";
    document.getElementById('p2').innerHTML = "Player 2";

    var num1 = Math.floor(Math.random()*6) + 1;
    var firstimg = "images/dice" + num1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", firstimg)

    var num2 = Math.floor(Math.random()*6)+1;
    var secondimg = "images/dice" + num2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", secondimg);

    if(num1 > num2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 is Winner";
        audio("sounds/winner.mp3");
    }
    else if(num2 > num1){
        document.querySelector("h1").innerHTML = "Player2 is Winner 🚩";
        audio("sounds/winner.mp3");
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
        audio("sounds/draww.mp3");
    }
}

function audio(file){
    document.getElementById("audio").innerHTML="<embed src=\""+file+"\" hidden=\"true\" autostart=\"true\" loop=\"false\"/>";
}
