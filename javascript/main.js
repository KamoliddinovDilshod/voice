var btnRec = document.querySelector(".site__btn");
var elCar = document.querySelector(".box__car");
var elMan = document.querySelector(".box__human");

var record = new webkitSpeechRecognition();

record.lang = "en-US";

record.onresult  = function(evt){
  var command = evt.results[0][0].transcript;
  console.log(command);
  if (command=="green") {
    elCar.classList.add("box__car-anim")
  }
  else if (command=="yellow"){
    elCar.classList.add("box__car-yellow")
  }
  else if (command =="red"){
    elMan.classList.add("box__human-anim")
  }
  else{
    alert(`Error . Your sentance is  ${command}`);
  }
}

btnRec.addEventListener("click" , function(){
  record.start();
})
