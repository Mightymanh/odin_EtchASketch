console.log("hello world");

const bigDiv = document.querySelector(".BigDiv");

// create a 16 by 16 grids
for (let i = 0; i < 16; i++) {
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
        // smallDiv.style.height = `${rowLength / 16}px`;
        rowDiv.appendChild(smallDiv);
    }
}