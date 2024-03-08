// const { myFetch, addDestinationInfo, validateInput, formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {


  // let listedPlanets;
  // const listedPlanetsResponse = myFetch(); // returns a promise that returns planets json
//  ..........................................................................................................................
//  ..........................................................................................................................

//  PART ONE: VALIDATE INPUTS
//  .........................
//    create launch checklist:
//      validate shuttle launch variables,
//        prevent unready launch
//          indicate when launch ready
//  ..................................

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let list;
    let pilot = document.getElementById("pilotName").value;
    let copilot = document.getElementById("copilotName").value;
    let fuelLevel = document.getElementById("fuelLevel").value;
    let cargoLevel = document.getElementById("cargoMass").value;
    
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });

  //  ..........................................................................................................................
  //  ..........................................................................................................................

  //  PART TWO: FETCH PLANETARY DATA
  //  ..............................

// listedPlanetsResponse
myFetch()
    .then((data) => {
      // try-catch? --> predicts & bridges errors to continue code flow
      //  open browser dev tools to see planet list
      console.log("data1", data);

      // call pickPlanet() & addDestinationInfo()
      //    to select a random planet from listedPlanets
      //      & pass that planet info to addDestinationInfo()
      //        reload page to see mission target info
      const planetDestination = pickPlanet(data);

      console.log("planetDestination", planetDestination);

      console.log("Object.values(planetDestination):", Object.values(planetDestination));
      addDestinationInfo(document, planetDestination);
                                  // name, diameter, star, distance, moons, imageUrl
    });
});