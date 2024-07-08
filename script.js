document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".zoom-image");
    var overlay = document.getElementById("overlay");
    var expandedImg = document.getElementById("expandedImg");
    var closeBtn = document.getElementById("closeBtn");

    images.forEach(function(img) {
        img.onclick = function() {
            overlay.style.display = "flex";
            expandedImg.src = this.getAttribute("data-highres");
        }
    });

    closeBtn.onclick = function() {
        overlay.style.display = "none";
    }
});
