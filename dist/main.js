var randomColorValue = function () {
    var max = 256, min = 100;
    return ((Math.random() * (max - min) + min).toFixed());
};
// reduces the input number to the lowest possible number that can be done x*x
var getBoxCountEachWays = function (numberOfBoxes) {
    var boxCountEachWays = Number((Math.sqrt(numberOfBoxes)).toFixed());
    return boxCountEachWays;
};
var changeBoxRadius = function (id, box) {
    var radiusTopLeft, radiusTopRight, radiusBottomLeft, radiusBottomRight;
    var boxBorderRadius = "15px";
    if (id === 0) {
        box.style.borderTopLeftRadius = boxBorderRadius;
    }
};
var createSketchArea = function (numberOfBoxes) {
    var sketchArea = document.querySelector(".sketch-area");
    var boxCountButton = document.querySelector(".controls > button");
    if (boxCountButton) {
        boxCountButton.textContent = "".concat(Math.pow(getBoxCountEachWays(numberOfBoxes), 2), " Blocks");
    }
    for (var i = 0; i < Math.pow(getBoxCountEachWays(numberOfBoxes), 2); i++) {
        var box = document.createElement("div");
        box.classList.add("box");
        box.style.flex = "0 0 ".concat(100 / getBoxCountEachWays(numberOfBoxes), "%");
        changeBoxRadius(i, box);
        if (sketchArea) {
            sketchArea.appendChild(box);
        }
        box.addEventListener("mouseover", function (event) {
            var target = event.target;
            if (!event.ctrlKey) {
                console.log("mouse over");
                target.style.backgroundColor = "rgb(".concat(randomColorValue(), ", ").concat(0, ", ").concat(0, ")");
            }
        });
    }
};
var clearSketchArea = function (userInput) {
    var sketchArea = document.querySelector(".sketch-area");
    var sketchbox = document.querySelectorAll(".box");
    sketchbox.forEach(function (i) {
        if (sketchArea) {
            sketchArea.removeChild(i);
        }
    });
    createSketchArea(userInput);
};
window.addEventListener("DOMContentLoaded", function () {
    var boxCountButton = document.querySelector(".controls > button");
    var resetSketchArea = document.querySelector(".controls > button:nth-child(2)");
    // clears the previous sketchArea and creates new one
    var userInput;
    if (boxCountButton) {
        boxCountButton.addEventListener("click", function () {
            userInput = prompt("Input number of blocks");
            clearSketchArea(userInput);
        });
    }
    if (resetSketchArea) {
        resetSketchArea.addEventListener("click", function () {
            clearSketchArea(userInput == undefined ? 25 : userInput);
        });
    }
});
createSketchArea(25);
