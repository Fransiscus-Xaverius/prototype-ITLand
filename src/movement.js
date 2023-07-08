//player character movement

import {getX, getY, setX, setY} from "../main.js";

import {encounter, battle} from "./battle.js";

let win;

export function moveUp(){
    var posX = getX();
    var posY = getY();
    alert(posY);
    var fight = encounter(posX,(posY-1));
    win = false;
    if(fight){
      battle();
    }
    else{
      win = true;
    }
    if(win){
        alert("win");
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posY--;
      setY(posY);
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
      alert("done");
    }
  }
  
export function moveDown(){
    var posX = getX();
    var posY = getY();
    var fight = encounter(posX,(posY+1));
    win = false;
    if(fight){
      battle();
    }
    else{
      win = true;
    }
    if(win){
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posY++;
      setX(posX);
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }
  
export function moveRight(){
    var posX = getX();
    var posY = getY();
    var fight = encounter((posX+1),posY);
    win = false;
    if(fight){
      battle();
    }
    else{
      win = true;
    }
    if(win){
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posX++;
      setX(posX);
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }
  
 export function moveLeft(){
    var posX = getX();
    var posY = getY();
    var fight = encounter((posX-1),posY);
    win = false;
    if(fight){
      battle();
    }else{
      win = true;
    }
    if(win){
      var old = $("#grid"+posX+posY);
      old.removeClass("dot");
      posX--;
      setY(posY);
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }