const harryPotterCharacters = ["Harry", "Ron", "Hermione", "Hagrid" ,"Neville", "Sirius", "Lupin", "Dumbledore", "Snape"]; 
const harryPotterVillains = ["Voldemore", "Belletrix", "Grindewald"];

//render const to html//
document.getElementById("hp-characters").innerHTML = harryPotterCharacters;

//Arrays//

  //.push() method//
   harryPotterCharacters.push("Draco");
  //render to html//
   document.getElementById("push").innerHTML = harryPotterCharacters; 
  // `.unshift() method//
   harryPotterCharacters.unshift("James");
  //render to html//
   document.getElementById("unshift").innerHTML = harryPotterCharacters;

   //.pop() method//
    harryPotterCharacters.pop();
   //render to html//
    document.getElementById("pop").innerHTML = harryPotterCharacters;
   //.shift() method//
    harryPotterCharacters.shift();
   //render to html//
    document.getElementById("shift").innerHTML = harryPotterCharacters;

