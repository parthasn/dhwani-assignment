

window.onload = function() {
    var box1 = document.getElementById("box1")
    box1.addEventListener("click", toggleBox1)
    box1.style.zIndex = 0

    var box2 = document.getElementById("box2")
    box2.addEventListener("click", toggleBox2)
    box2.style.zIndex = 0

    var box3 = document.getElementById("box3")
    box3.addEventListener("click", toggleBox3)
    box3.style.zIndex = 0

    var box4 = document.getElementById("box4")
    box4.addEventListener("click", toggleBox4)
    box4.style.zIndex = 0

    var box5 = document.getElementById("box5")
    box5.addEventListener("click", toggleBox5)
    box5.style.zIndex = 0
}

function toggleBox1(){
 var box1 = document.getElementById("box1")
   
    if(box1.style.zIndex > 0){
        box1.style.zIndex = 0
    }
    else{
        box1.style.zIndex = 1
    }
    
    
}


function toggleBox2(){
    var box2 = document.getElementById("box2")
    if(box2.style.zIndex > 0){
        box2.style.zIndex = 0
    }
    else{
        box2.style.zIndex = 1
    }
}

function toggleBox3(){
    var box3 = document.getElementById("box3")
    if(box3.style.zIndex > 0){
        box3.style.zIndex = 0
    }
    else{
        box3.style.zIndex = 1
    }
}

function toggleBox4(){
    var box4 = document.getElementById("box4")
    if(box4.style.zIndex > 0){
        box4.style.zIndex = 0
    }
    else{
        box4.style.zIndex = 1
    }
}

function toggleBox5(){
    var box5 = document.getElementById("box5")
    if(box5.style.zIndex > 0){
        box5.style.zIndex = 0
    }
    else{
        box5.style.zIndex = 1
    }
}