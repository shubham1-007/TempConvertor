



// function tempConverter(valNum) {
//   valNum = parseFloat(valNum);
//   document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
// }


function temperatConvertor(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFah").innerHTML=(valNum*1.8)+32;
}


function tconvertor(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}



function temCon(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("otc").innerHTML=valNum-273.15;
}

