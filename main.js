console.log("fuck js");

import * as animation from "./src/animation.js";
import * as command from "./src/command.js";

var gridContainer = document.getElementById("grid-container");
var term = new Terminal();

var posX = 0;
var posY = 6;

function onload(){
    console.log("animat");
    animation.redraw(posX,posY);
  
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
            command.handleCommand(currLine);
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

window.addEventListener('load', onload)

export function getX(){
    return posX;
}

export function getY(){
    return posY;
}

export const setX = (val) => (posX = val);
export const setY= (val) => (posY = val);


export { term };