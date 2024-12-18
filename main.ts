const randomColorValue = (): string => {
    let max = 256, min = 100;
    return ((Math.random() * (max - min) + min).toFixed());
}

// reduces the input number to the lowest possible number that can be done x*x
const getBoxCountEachWays = (numberOfBoxes: number): number => {
    let boxCountEachWays = Number((Math.sqrt(numberOfBoxes)).toFixed());
    return boxCountEachWays;
}
    

const changeBoxRadius = (id: number, box: HTMLElement) => {
    let radiusTopLeft, radiusTopRight, radiusBottomLeft, radiusBottomRight;
    
    let boxBorderRadius = "15px";
    
    if (id === 0) {
        box.style.borderTopLeftRadius = boxBorderRadius;
    }
}

const createSketchArea = (numberOfBoxes: number) => {
    let sketchArea = document.querySelector(".sketch-area");
    let boxCountButton = document.querySelector(".controls > button");

    if (boxCountButton) {
        boxCountButton.textContent = `${getBoxCountEachWays(numberOfBoxes) ** 2} Blocks`;
    }

    for(let i = 0; i < getBoxCountEachWays(numberOfBoxes) **2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.flex = `0 0 ${100/getBoxCountEachWays(numberOfBoxes)}%`;
        changeBoxRadius(i, box);
        if (sketchArea) {
            sketchArea.appendChild(box)
        }

        box.addEventListener("mouseover", (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!event.ctrlKey) {
                console.log("mouse over")
                target.style.backgroundColor = `rgb(${randomColorValue()}, ${0}, ${0})`;
            }
            
        })
    
    }
}

const clearSketchArea = (userInput: number) => {
    let sketchArea = document.querySelector(".sketch-area");
    let sketchbox = document.querySelectorAll(".box");
    sketchbox.forEach(i => {
        if (sketchArea) {
            sketchArea.removeChild(i)
        }
    })
    createSketchArea(userInput);
}

window.addEventListener("DOMContentLoaded", () => {
    let boxCountButton = document.querySelector(".controls > button");
    let resetSketchArea = document.querySelector(".controls > button:nth-child(2)");
    // clears the previous sketchArea and creates new one
    let userInput: any;
    if(boxCountButton) {
        boxCountButton.addEventListener("click", () => {
            userInput = prompt("Input number of blocks");
            clearSketchArea(userInput);
        }) 
    }

    if (resetSketchArea) {
        resetSketchArea.addEventListener("click", () => {
            clearSketchArea(userInput == undefined ? 25 : userInput);
        })
    }
})

createSketchArea(25)