let posX = 0;
let posY = 7;

function onload(){
    var gridContainer = document.getElementById("grid-container");
    
    for (var row = 0; row < 13; row++) {
      for (var col = 0; col < 32; col++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        
        // Add dot to [0, 7] grid cell
        if (row === 6 && col === 0) {
          cell.classList.add("dot");
        }
        
        gridContainer.appendChild(cell);
      }
    }
}

