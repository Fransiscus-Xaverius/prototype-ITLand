var gridContainer = document.getElementById("grid-container");
var term = new Terminal();

var playerCharacter = {
   posX: 0,
   posY: 6
}

var Grid = [];
let win;
var timer = 0;
import * as animation from "./animation.js";

//Main animation loop.
function onload(){
  console.log("animat");
  animation.redraw(playerCharacter.posX,playerCharacter.posY);

  term.open(document.getElementById('terminal'));
  //term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  term.focus();
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

  setInterval(animation.redraw, 1000);    
});
}


