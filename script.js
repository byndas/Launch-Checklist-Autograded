// const { myFetch, addDestinationInfo, formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  //  ......................
  //  HANDLE FORM SUBMISSION
  //  ......................
  document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault(); // prevents form submission from re-loading page

    const list = document.querySelector("#faultyItems");
    // const pilot = document.querySelector('input[name="pilotName"]').value;
    // const copilot = document.querySelector('input[name="copilotName"]').value;
    // const fuelLevel = Number(document.querySelector('input[name="fuelLevel"]').value);
    // const cargoMass = Number(document.querySelector('input[name="cargoMass"]').value);

    const pilot = this.elements.pilotName.value;
    const copilot = this.elements.copilotName.value;
    const fuelLevel = Number(this.elements.fuelLevel.value);
    const cargoMass = Number(this.elements.cargoMass.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });
  //  ..............................
  //  FETCH & DISPLAY PLANETARY JSON
  //  ..............................
    let listedPlanets;
    const listedPlanetsResponse = myFetch();

  listedPlanetsResponse // returns promise that returns planets json response data
    .then((result) => {

      listedPlanets = result;

      const planetDestination = pickPlanet(listedPlanets); // selects random planet

      console.log("planetDestination:", planetDestination);

      addDestinationInfo(document, planetDestination.name, planetDestination.diameter, planetDestination.star, planetDestination.distance, planetDestination.moons, planetDestination.image); // displays planetDestination
    }); // try-catch? --> predicts error bridges to continue code flow
});