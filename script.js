// const { myFetch, addDestinationInfo, validateInput, formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  let list; // = document.getElementById("faultyItems").value;
  let pilotName = document.getElementById("pilotName").value;
  let copilotName = document.getElementById("copilotName").value;
  let fuelLevel = document.getElementById("fuelLevel").value;
  let cargoMass = document.getElementById("cargoMass").value;

  let listedPlanets;
  const listedPlanetsResponse = myFetch(); // returns a promise that returns planets json
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
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass)
  });

  //  ..........................................................................................................................
  //  ..........................................................................................................................

  //  PART TWO: FETCH PLANETARY DATA
  //  ..............................

listedPlanetsResponse
    .then((result) => {
      console.log("result", result);

      listedPlanets = result;

      console.log("listedPlanets1", listedPlanets);
    })
    .then(() => {
      // try-catch? --> predicts & bridges errors to continue code flow
      //  open browser dev tools to see planet list
      console.log("listedPlanets2", listedPlanets);

      // call pickPlanet() & addDestinationInfo()
      //    to select a random planet from listedPlanets
      //      & pass that planet info to addDestinationInfo()
      //        reload page to see mission target info
      const planetDestination = pickPlanet(listedPlanets);

      console.log("planetDestination", planetDestination)
      addDestinationInfo(document, ...Object.keys(planetDestination));
      // name,diameter,star,distance,moons,imageUrl
    });
});