

//Player animation
export function animatePlayer(){
    $('#grid'+posX+posY).prepend($('<img>',{id:'playermodel',src:`../prototype-ITLand/src/assets/player_idle/${PI}.png`, class:'cell-content'}));
    console.log("animated");
    PI++;
    if(PI>6) PI = 1;
}

//Enemy animation
export function animateEnemy(){
    $('.grid enemy').prepend();
}

//Redraw grid after battle animation
export function redraw(x,y){
    var gridContainer = document.getElementById("grid-container");
    if(Grid.length===0){
      for (var row = 0; row < 26; row++) {
        temp = [];
        for (var col = 0; col < 64; col++) {
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
      $('.grid').empty();
      for (var row = 0; row < 26; row++) {
        temp = Grid[row];
        for (var col = 0; col < 64; col++) {
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
    $('#score').text('Score :'+timer+"s");
    console.log(timer);
    timer++;
    animatePlayer();
    console.log(JSON.stringify(Grid))  
}

//enemy encounter function
export function encounter(newX, newY){
    var next = $("#grid"+newX+newY);
    alert(`${newX}, ${newY}`);
    if(next.hasClass("enemy")) return true;
    return false;
}

//battle implementation
export function battle(){
    var inBattle = true;
    var animate;
    $(".grid").empty();
    while(inBattle){
      
    }
}

export function animateBattle(){
  
}
