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

    const list = document.querySelector("#faultyItems");
    const pilot = document.querySelector('input[name="pilotName"]').value;
    const copilot = document.querySelector('input[name="copilotName"]').value;
    const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    const cargoLevel = document.querySelector('input[name="cargoMass"]').value;

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