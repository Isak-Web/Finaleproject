const visa = document.querySelector('.game---status');
//Displays game---status

let spelare = 'X';

let spelinfo = [ "", "", "", "", "", "", "", "", "",];
//9 "" for 9 cells to save information

visa.innerHTML = tur();

const treirad = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



function speladCell(cell, celler) {
status[celler]= spelare;
cell.innerHtml = spealre;
}

function speltur() {

}

/*if ( currentPlayer == "X" ) { 
    document.querySelectorAll('.cell')[clickedCellIndex].style.color = "blue";
}else{
    document.querySelectorAll('.cell')[clickedCellIndex].style.color = "red";
}
//changes the color for the players*/