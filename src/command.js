//COMMAND HANDLER FOR XTERM TERMINAL

import {term} from "../main.js";
import * as movement from "./movement.js";

export function handleCommand(command) {
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
        movement.moveUp();
        console.log(JSON.stringify(Grid));
        break;
      case 'moveDown()':
        movement.moveDown();
        break;
      case 'moveLeft()':
        movement.moveLeft();
        break;
      case 'moveRight()':
        movement.moveRight();
        break;
      case 't':
        animation.redraw();
        console.log(JSON.stringify(Grid));
        break;
      default:
        term.writeln('Unknown command: ' + cmd);
        break;
    }
}