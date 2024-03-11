require("cross-fetch/polyfill");

/*  TASK FLOW
  .......................................................
  on page load: FETCH & DISPLAY RANDOM PLANET'S JSON DATA
  .....................................................................
  on form submit: VALIDATE INPUTS, CHECK FOR MISSION-READY FUEL & CARGO
  ...................................................................*/

function validateInput(testInput) {
  //  inputs must not be empty
  //  pilot & copilot names must not be numbers
  //  fuelLevel & cargoMass must be numbers
  //  NOTE: isNaN(value) returns true or false

  if (!testInput.length) {
    // alert("All fields are required!");
    return "Empty";
  }

  if (isNaN(testInput)) {
    return "Not a Number";
  }
  else {
    return "Is a Number";
  }
} //  returns: "Empty" or "Not a Number" or "Is a Number"

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

  //  show #faultyItems list
  list.style.visibility = "visible";

  const launchStatusId = document.querySelector("#launchStatus");
  const missionReady = (fuelLevel >= 10000) && (cargoMass <= 10000);

  if (missionReady) {
    launchStatusId.innerHTML = "Shuttle is Ready for Launch";
    launchStatusId.style.color = "green";
  }
  else {
    launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusId.style.color = "red";
  }

  document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
  document.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

  if (fuelLevel < 10000) {
    document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
    // alert("Fuel level too low for launch");
  }
  else {
    document.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch";
  }

  if (cargoMass > 10000) {
    document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    // alert("Cargo mass too heavy for launch");
  }
  else {
    document.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch";
  }

  //  input type validation handling
  if ((validateInput(pilot) === "Not a Number") &&
      (validateInput(copilot) === "Not a Number") &&
      (validateInput(fuelLevel) === "Is a Number") &&
      (validateInput(cargoMass) === "Is a Number")) {
    //  all inputs have correct types
    console.log("ALL INPUTS HAVE CORRECT TYPES");

    //  therefore: use template literals to update crew names to list-items
    //  document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    //  document.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    //  update mission-ready status of fuel & cargo:
    //    handle insufficient fuel or cargo numbers
    // if (fuelLevel < 10000) {
    //   // missionReady = false;
    //   document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
    //   // alert("Fuel level too low for launch");
    // }
    // else {
      // document.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch";
    // }

    // if (cargoMass > 10000) {
    //   // missionReady = false;
    //   document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    //   // alert("Cargo mass too heavy for launch");
    // }
    // else {
      // document.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch";
    // }

    // if (missionReady) {
    //   launchStatusId.innerHTML = "Shuttle is Ready for Launch";
    //   launchStatusId.style.color = "green";
    // }
    // else {
    //   launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    //   launchStatusId.style.color = "red";
    // }
  }
  else {
    // alert("Make sure to enter valid information for each field!");
    console.log("INVALID INPUT");
  }
}
//  ...................................
//  FETCH & DISPLAY PLANETARY JSON DATA
//  ...................................

async function myFetch() {
  return await fetch("https://handlers.education.launchcode.org/static/planets.json").then(response => response.json());
}

function pickPlanet(planetsJSON) {
  // console.log("planetsJSON:", planetsJSON);

  const randomIndex = Math.floor(Math.random() * planetsJSON.length);

  // console.log("planetsJSON["+randomIndex+"]:", planetsJSON[randomIndex]);

  return planetsJSON[randomIndex];
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  // adds random planet's json data to #missionTarget via html tags
  document.querySelector("#missionTarget").innerHTML =

  `<h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}" />
  `;
}

//  ...................................................
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;