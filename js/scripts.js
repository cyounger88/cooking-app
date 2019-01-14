var liter =function(){
return (gallon*3.785);
}

var gallon=prompt("Enter Gallons");
var answer=liter(gallon);
alert(answer+" Liters");

var cups=function(){
return( gallon/16);
}
var converted=cups(gallon);
alert(converted + "cups");
