import * as main from "./main";

export function moveUp(){
    var fight = encounter(posX,(posY-1));
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
      posY--;
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }
  
export function moveDown(){
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
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }
  
export function moveRight(){
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
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }
  
 export function moveLeft(){
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
      var newTile = $("#grid"+posX+posY);
      newTile.addClass("dot");
    }
  }