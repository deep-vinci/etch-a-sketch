const randomColorValue = () => {
    let max = 256, min = 100;
    return ((Math.random()* (max - min) + min).toFixed());
}

// reduces the input number to the lowest possible number that can be done x*x
const getBoxCountEachWays = (numberOfBoxes) => {
    let boxCountEachWays = Number((Math.sqrt(numberOfBoxes)).toFixed());
    return boxCountEachWays;
}

const createSketchArea = (numberOfBoxes) => {
    let sketchArea = document.querySelector(".sketch-area");
    let boxCountButton = document.querySelector(".controls > button");

    boxCountButton.textContent = `${getBoxCountEachWays(numberOfBoxes) ** 2} Blocks`;

    for(let i = 0; i < getBoxCountEachWays(numberOfBoxes) **2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.flex = `0 0 ${100/getBoxCountEachWays(numberOfBoxes)}%`;
        sketchArea.appendChild(box)

        box.addEventListener("mouseover", (event) => {
            if (!event.ctrlKey) {
                console.log("mouse over")
            event.target.style.backgroundColor = `rgb(${randomColorValue()}, ${0}, ${0})`;
            }
            
        })
    
    }
}

const clearSketchArea = (userInput) => {
    let sketchArea = document.querySelector(".sketch-area");
    let sketchbox = document.querySelectorAll(".box");
    sketchbox.forEach(i => {
        sketchArea.removeChild(i)
    })
    createSketchArea(userInput);
}

window.addEventListener("DOMContentLoaded", () => {
    let boxCountButton = document.querySelector(".controls > button");
    let resetSketchArea = document.querySelector(".controls > button:nth-child(2)");
    // clears the previous sketchArea and creates new one
    let userInput;
    boxCountButton.addEventListener("click", () => {
        userInput = prompt("Input number of blocks");
        clearSketchArea(userInput);
    }) 

    resetSketchArea.addEventListener("click", () => {
        clearSketchArea(userInput == undefined ? 25 : userInput);
    })
})

createSketchArea(25)