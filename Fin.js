const visa = document.querySelector('.game--status');
//Displays game--status

let bryt = true;
//Breaks if false

let spelare = "X";
//Saves on spelare X

let spelInfo = ["", "", "", "", "", "", "", "", ""];
//9 "" for 9 cells to save information with empty strings

const treIRad = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
//combonations that for winning senario

function speladCell(cell, celler) { //when clicking a cell spelinfo gives info to celler and spelare puses in to cell via cell.inrehtml
    spelInfo[celler] = spelare;    //here we upate The game state with spelinfo 
    cell.innerHTML = spelare;     //update the page by pusing spelare into innerHTML
}

function spelTur() {           // Function for wich players turn it is.
    spelare = spelare === "X" ? "O" : "X";  //if statment that allows an operator ? to compare if "X" is true
}




function vinnare() {                                        // function for winner or if you dont win it's an automatic draw
    let vin = false;                                       // for the game to finsish vin needes to be true but until then vin is false
    for (let i = 0; i <= 7; i++) {                        // for loop for seeing if there is a winner by reading the 8 winning soulutions
        const vilkor = treIRad[i];                       // converts i to string
        let a = spelInfo[vilkor[0]];                    // for the loop to become false we need to check all soulutions that are possible on the board.
        let b = spelInfo[vilkor[1]];
        let c = spelInfo[vilkor[2]];
        if (a === '' || b === '' || c === '') {      // Logical Operator || is true as long as boolean values are true.
            continue;
        }
        if (a === b && b === c) {                 //If a=b=c vin is true and then you break and 
            vin = true;
            break
        }
    }

    if (vin) {                             // bryt becomes false wich makes it a win
        bryt = false;
        return;
    }


    spelTur();                       //ends the loop with the player
}


function cellKlick(cellKlick) {
    const cell = cellKlick.target;                                  //will save in html element
    const celler = Number(cell.getAttribute('data-cell-index'));   //identify were the cells are in the grid. will return a number

    if (spelInfo[celler] !== "" || !bryt) {                      // Checks if there are any celler yet to recive a value.
        return;
    }

    speladCell(cell, celler);
    vinnare();
}


function restart() { //restart game fuction
    bryt = true;    //  converting variabels bak to normal
    spelare = "X";
    spelInfo = ["", "", "", "", "", "", "", "", ""];                         //emptys the spelInformation
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");//emptys the stored nubmber in every cell and then convert cell to cell.innerhtml wich make it usable again.


}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellKlick)); // Listens to cell
document.querySelector('.game--restart').addEventListener('click', restart);                  //listens to restart--button
