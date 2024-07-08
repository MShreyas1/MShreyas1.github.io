document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("myImage");
    var overlay = document.getElementById("overlay");
    var expandedImg = document.getElementById("expandedImg");
    var closeBtn = document.getElementById("closeBtn");

    img.onclick = function(){
        overlay.style.display = "flex";
        expandedImg.src = this.getAttribute("data-highres");
    }

    closeBtn.onclick = function() { 
        overlay.style.display = "none";
    }
});
