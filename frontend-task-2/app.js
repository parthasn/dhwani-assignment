

window.onload = function() {
    var box1 = document.getElementById("box1")
    box1.addEventListener("click", toggleBox)
    box1.style.zIndex = 0

    var box2 = document.getElementById("box2")
    box2.addEventListener("click", toggleBox)
    box2.style.zIndex = 0

    var box3 = document.getElementById("box3")
    box3.addEventListener("click", toggleBox)
    box3.style.zIndex = 0

    var box4 = document.getElementById("box4")
    box4.addEventListener("click", toggleBox)
    box4.style.zIndex = 0

    var box5 = document.getElementById("box5")
    box5.addEventListener("click", toggleBox)
    box5.style.zIndex = 0
}

function toggleBox(e){
    var box = document.getElementById(e.target.id)
      
       if(box.style.zIndex > 0){
           box.style.zIndex = 0
       }
       else{
           box.style.zIndex = 1
       }
}

