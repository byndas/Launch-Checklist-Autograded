// const { myFetch, addDestinationInfo, formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  //  ......................
  //  HANDLE FORM SUBMISSION
  //  ......................
  document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault(); // prevents form submission from re-loading page

    const list = document.querySelector("#faultyItems");
    const pilot = document.querySelector('input[name="pilotName"]').value;
    const copilot = document.querySelector('input[name="copilotName"]').value;
    const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    const cargoMass = document.querySelector('input[name="cargoMass"]').value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });
  //  ..............................
  //  FETCH & DISPLAY PLANETARY JSON
  //  ..............................
  myFetch() // returns promise that returns planets json response data
    .then((data) => {

      const planetDestination = pickPlanet(data); // selects random planet

      addDestinationInfo(document, ...Object.values(planetDestination)); // displays planetDestination
    }); // try-catch? --> predicts error bridges to continue code flow
});
/*
    let listedPlanets;
    const listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then
  */