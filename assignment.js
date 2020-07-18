//feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}


//woodCanculator

function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount   = bed*5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}


//brickCalculator

function brickCalculator(floorNumber){

    if( floorNumber<=10){
        var rickNumbers = floorNumber*15*1000;
        return rickNumbers;
    }

    if(floorNumber<=20){
        var amountOf10th = 10*15*1000;
        var n= floorNumber-10;
        var rickNumbers = amountOf10th + n*1000*12;
        return rickNumbers;
    }
    if(floorNumber>20) {
        var amountOf10th = 10*15*1000;
        var amountOf20th = amountOf10th + 20*1000*12;
        var n = floorNumber-20;
        var rickNumbers = amountOf10th + amountOf20th + n*10*1000;
        return rickNumbers;
    }

    }


//tinyFriend

function tinyFriend(tiny){

      var small = tiny[0];
      for( var i=0; i<tiny.length; i++){
          var element=tiny[i];
        if(element.length<small.length){
            small=element;
        }
      }
      return small;
  }
