let posX = 0;
let posY = 6;
var term = new Terminal();
var Grid = [];
var gridContainer = document.getElementById("grid-container");
function onload(){
    
    redraw(posX,posY);

    term.open(document.getElementById('terminal'));
    //term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

    var currLine = "";
    var entries = [];
    term.onKey((ev) => {
      if (ev.domEvent.key == "Enter") {
        if (currLine) {
            entries.push(currLine);
            term.write("\r\n");
            //Send cmd to backend here!
            handleCommand(currLine);
            currLine = ""
        }
    } else if (ev.domEvent.key == "Backspace") {
        if (currLine) {
            currLine = currLine.slice(0, currLine.length - 1);
            term.write("\b \b");
        }
    } else {
        currLine += ev.key
        term.write(ev.key);
    }
  });

}

//needs to be implemented for each move.
function save(){
  
}

//redraw function
function redraw(x,y){
  var gridContainer = document.getElementById("grid-container");
  if(Grid.length===0){
    for (var row = 0; row < 13; row++) {
      temp = [];
      for (var col = 0; col < 32; col++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("id", "grid"+col+row);
        if (row === posY && col === posX) {
          cell.classList.add("dot");
          temp.push("Player");
        }
        else{
          var isEnemy =Math.floor(Math.random() * 10);
          if(isEnemy===1) {
            cell.classList.add("enemy");
            temp.push("Enemy");
          }
          else temp.push("Empty");
        }
        gridContainer.appendChild(cell);
      }
      Grid.push(temp);
    }
  }  
  else{
    for (var row = 0; row < 13; row++) {
      temp = Grid[row];
      for (var col = 0; col < 32; col++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("id", "grid"+col+row);
        if (temp[col]==="Player") {
          cell.classList.add("dot");
        }
        else if (temp[col]==="Enemy") {
          cell.classList.add("enemy");
        }
        gridContainer.appendChild(cell);
      }
    }
  }
  console.log(JSON.stringify(Grid))  
}

//enemy encounter function
function encounter(newX, newY){
  var next = $("#grid"+newX+newY);
  if(next.hasClass("enemy")) return true;
  return false;
}

var grid;

//battle implementation
function battle(){
  $(".grid").empty();
}

function moveUp(){
  var fight = encounter(posX,(posY-1));
  var win = false;
  if(fight){
    battle();
  }
  else{
    var old = $("#grid"+posX+posY);
    old.removeClass("dot");
    posY--;
    var newTile = $("#grid"+posX+posY);
    newTile.addClass("dot");
  }
}

function handleCommand(command) {
  // Split the command into its parts
  const parts = command.trim().split(' ');
  const cmd = parts[0];
  const args = parts.slice(1);

  // Perform different actions based on the command
  switch (cmd) {
    case 'help':
      term.writeln('Available commands:');
      term.writeln('- help: Display available commands');
      term.writeln('- echo [text]: Echo the provided text');
      term.writeln('- clear: Clear the terminal');
      break;
    case 'echo':
      const text = args.join(' ');
      term.writeln('Echo: ' + text);
      break;
    case 'clear':
      term.clear();
      break;
    case 'moveUp()':
      moveUp();
      console.log(JSON.stringify(Grid));
      break;
    case 'moveDown()':
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posY++;
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
      break;
    case 'moveLeft()':
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posX--;
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
      break;
    case 'moveRight()':
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posX++;
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
      break;
    case 't':
      redraw();
      console.log(JSON.stringify(Grid));
      break;
    default:
      term.writeln('Unknown command: ' + cmd);
      break;
  }
}

