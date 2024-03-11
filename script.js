// const { myFetch, addDestinationInfo, formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    //  ......................
    //  HANDLE FORM SUBMISSION
    //  ......................
    document.querySelector("form").addEventListener("submit", function(event) {

        event.preventDefault(); // prevents form submission from re-loading page

    //  const pilot = document.querySelector('input[name="pilotName"]').value;
    //  const copilot = document.querySelector('input[name="copilotName"]').value;
    //  const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    //  const cargoMass = document.querySelector('input[name="cargoMass"]').value;

    //  const pilot = this.elements.pilotName.value;
    //  const copilot = this.elements.copilotName.value;
    //  const fuelLevel = this.elements.fuelLevel.value;
    //  const cargoMass = this.elements.cargoMass.value;

    //  console.log("this:", this); //  no need to touch the DOM

    //  const list = this.parentElement.nextElementSibling.children[1];
        const list = document.querySelector("#faultyItems");

        const pilot = this[0].value;
        const copilot = this[1].value;
        const fuelLevel = this[2].value;
        const cargoMass = this[3].value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    //  formSubmission(document, list, this[0].value, this[1].value, this[2].value, this[3].value);
    });
    //  ..............................
    //  FETCH & DISPLAY PLANETARY JSON
    //  ..............................
    let listedPlanets;
    const listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then((result) => { // returns promise that returns planets json response data

        listedPlanets = result;

        const planetDestination = pickPlanet(listedPlanets); // selects random planet
        // console.log("planetDestination:", planetDestination);

        addDestinationInfo(document, planetDestination.name, planetDestination.diameter, planetDestination.star, planetDestination.distance, planetDestination.moons, planetDestination.image); // displays planetDestination
        // addDestinationInfo(document, ...Object.values(planetDestination)); // displays planetDestination

    }); // try-catch? --> predicts error bridges to continue code flow
});

//  For our Launch Checklist graded assignment, line 148 in grading.test.js seems incorrectly written:
//      the last two arguments are swapped so that the test's expected order of parameters
//          does not match the order of keys that the json response gives us.