
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