console.log("hello world");

const hoverDelay = 5000;
let size;

const bigDiv = document.querySelector(".BigDiv");

// function for creating a line effect for hovering
function putColor() {
    this.style.backgroundColor = "black";
}

function outColor() {
    let current = this;
    setTimeout(function() {
        current.style.backgroundColor = "white";
    }, hoverDelay);
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// button
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    size = parseInt(prompt("Please enter the size of the grids"));

    removeAllChildNodes(bigDiv);

    // create a size by size grids
    for (let i = 0; i < size; i++) {
        // create a row
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "rowDiv");

        // append row to BigDiv
        bigDiv.appendChild(rowDiv);

        let rowLength = rowDiv.offsetWidth;
        console.log(`length: ${rowLength}`);

        // put 16 elements in that row
        for (let j = 0; j < 16; j++) {
            let smallDiv = document.createElement("div");
            smallDiv.setAttribute("class", "smallDiv");
            smallDiv.addEventListener("mouseover", putColor);
            smallDiv.addEventListener("mouseout", outColor)
            rowDiv.appendChild(smallDiv);
        }
    }
})

