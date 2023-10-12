const harryPotterCharacters = ["Harry", "Ron", "Hermione", "Hagrid" ,"Neville", "Sirius", "Lupin", "Dumbledore", "Snape"]; 


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

   //.concat() method//
    const harryPotterVillains = ["Voldemort", "Belletrix", "Grindewald"];
    const harryPotterCreatures = ["Dementor", "Spiders", "Trolls", "Goblins"];
    const darkforce = harryPotterVillains.concat(harryPotterCharacters);
   //render to html//
    document.getElementById("concat").innerHTML = darkforce;

   //.slice()method//
    let results = harryPotterCharacters.slice(2);
   //render to html//
    document.getElementById("slice").innerHTML = results;

   //.splice() method//
    harryPotterCharacters.splice(2, 3, "Luna", "Cho");
  //render to html//
    document.getElementById("splice").innerHTML = harryPotterCharacters;

  //.filter() method//
   const ages = [17, 17, 17, 40 , 17, 42, 42, 92, 42];
   const result = ages.filter(checkDumbledore);

   function checkDumbledore(age) {
    return age >= 50;
   }
   //render to html//
   document.getElementById("filter").innerHTML = ages.filter(checkDumbledore);
 
  //.find() method//
    function chosenOne(harryPotterCharacters) {
    return chosenOne = "Harry";
  }
  //render it to html//
  document.getElementById("find").innerHTML = harryPotterCharacters.find(chosenOne);

  //.includes() method//
  harryPotterCharacters;
  //render to html//
  document.getElementById("include").innerHTML = harryPotterCharacters.includes("Snape");
  
  





   

