document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("imageContainer");
    var images = Array.from(imageContainer.getElementsByClassName("zoom-image"));

    // Function to shuffle an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the images
    shuffle(images);

    // Remove all images from the container
    images.forEach(function(image) {
        imageContainer.removeChild(image);
    });

    // Append images back to the container in shuffled order
    images.forEach(function(image) {
        imageContainer.appendChild(image);
    });

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
