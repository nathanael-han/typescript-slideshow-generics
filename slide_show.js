window.onload = initAll;
var selectedImage = 0;
var totalImages = 5;
// reference: https://www.tutorialsteacher.com/typescript/typescript-generic
function getArray(items) {
    return new Array().concat(items);
}
// calls generic function — sets string as type for array
var myImg = getArray(["images/img_1.jpg", "images/img_2.jpg", "images/img_3.jpg", "images/img_4.jpg", "images/img_5.jpg"]);
var myCaptions = getArray(["Greek Parthenon", "Santorini, Greece", "Mountain Landscape", "The Alps", "Narrow street with colorful homes"]);
function initAll() {
}
function slide() {
    ++selectedImage;
    document.getElementById("myImage").src = myImg[selectedImage % totalImages]; // uses modulus to loop through images
    document.getElementById("caption").innerHTML = myCaptions[selectedImage % totalImages];
}
setInterval(slide, 4000); // slides images every 4 seconds
