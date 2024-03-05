require("cross-fetch/polyfill");

// Write your helper functions here!

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  /*    mission target div HTML formatting:

                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">   */
}

// pilot & co-pilot names are strings
// fuel level & cargo mass are numbers
function validateInput(testInput) {
  // string parameter --> returns "Empty", "Not a Number", "Is a Number"


}

// use validateInput() to complete formSubmission()
// document parameter & strings for pilot, co-pilot, fuelLevel, cargo mass
function formSubmission(
  document,
  list,
  pilot,
  copilot,
  fuelLevel,
  cargoLevel
) {
  // NOTE: to check for NaN, use isNaN(value) method that returns true if value is NaN
  // use values in strings & document parameter for HTML document to update shuttle requirements
  // call formSubmission() in script.js

}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;


/*
update shuttle requirements list, <div id="faultyItems">, if something unready for launch:

use template literals to update <li> pilotStatus & copilotStatus to include pilot & co-pilot name

If user submits fuel level < 10,000 liters:
  change faultyItems to visible
  update fuel status to not enough fuel for mission
  change h2 element text, launchStatus, to “Shuttle not ready for launch”
  change text color to red

If user submits cargo mass > 10,000 kilograms:
  change list to visible
  update cargo status to too much mass for shuttle to take off
  change launchStatus text to “Shuttle not ready for launch”
  change text color to red

If shuttle launch-ready:
  change launchStatus text to “Shuttle is ready for launch” & text color to green

*/