var btn = document.getElementById('btn1');

function toggleHeart(event){
    var btn = event.target;
    if (btn.style.color == "red"){
        btn.style.color = "gray";
    } else {
        btn.style.color = "red";
    }
}