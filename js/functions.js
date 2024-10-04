const generateRowBtn = document.getElementById('generateRowBtn');

const jokerTableContainer = document.getElementById('jokerTableContainer');

const rowCounterDisplay = document.getElementById('rowCounter');

let totalRows = 0;

generateRowBtn.addEventListener('click', createNewRow);


function createNewRow() {
    
    const newRow = jokerTableContainer.insertRow();



    for (let j = 0; j < 7; j++) {
        
        const newCell = newRow.insertCell();
        
        newCell.textContent = Math.floor(Math.random() * 10);
        
        newCell.classList.add('jokerNumber');
    }

    totalRows++;
    
    rowCounterDisplay.textContent = totalRows;
}