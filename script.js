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
    // const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    // const cargoMass = document.querySelector('input[name="cargoMass"]').value;

    // console.log("this:", this); // --> no need to even touch the DOM
    const pilot = this[0].value;      //  pilotName
    const copilot = this[1].value;    //  copilotName
    const fuelLevel = this[2].value;  //  fuelLevel
    const cargoMass = this[3].value;  //  cargoMass

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });
  //  ..............................
  //  FETCH & DISPLAY PLANETARY JSON
  //  ..............................
    myFetch() // returns promise that returns planets json response data
    .then((jsonResponse) => {

      const planetDestination = pickPlanet(jsonResponse); // selects random planet
      // console.log("planetDestination:", planetDestination);

      addDestinationInfo(document, ...planetDestination); // displays planetDestination
    }); // try-catch? --> predicts error bridges to continue code flow
});