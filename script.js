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
