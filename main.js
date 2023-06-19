let posX = 0;
let posY = 6;
var term = new Terminal();
var Grid = [];

function onload(){
  alert("reload");
    var gridContainer = document.getElementById("grid-container");
    
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

function redraw(x,y){
  var gridContainer = document.getElementById("grid-container");
    
    for (var row = 0; row < 13; row++) {
      for (var col = 0; col < 32; col++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        // Add dot to [0, 7] grid cell
        if (row === posY && col === posX) {
          cell.classList.add("dot");
        }
        Grid[col,row] = cell;
        gridContainer.appendChild(cell);
      }
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
      var old = $(Grid[posX,posY]);
      old.removeClass("dot");
      posY--;
      var newTile = $(Grid[posX,posY]);
      newTile.addClass("dot");
      break;
    default:
      term.writeln('Unknown command! ' + cmd);
      break;
  }
}

