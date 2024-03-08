require("cross-fetch/polyfill");

/*  TASK FLOW

on form submit:
..........................................................................................................................
  PART ONE: VALIDATE INPUTS
    if any fail,
      prevent page re-load,
      add that shuttle info with shuttle-launch-unready-message to a visible #faultyItems
      return alert("errorMessage"),
    otherwise, update #launchStatus to display "Shuttle is launch ready"
..........................................................................................................................
  PART TWO: FETCH PLANETARY JSON DATA --> planetList API
    select random planet object from data response via its index number,
    add that planet's json data to #missionTarget
..........................................................................................................................
*/

function validateInput(testInput) {
  //  pilot & copilot names are strings
  //  fuelLevel & cargoLevel are numbers
  //  NOTE: isNaN(value) method returns true or false

  if (!testInput.length) {
    // alert("Must enter a value for each field.");
    return "Empty";
  }

  if (isNaN(testInput)) {
    return "Not a Number";
  }
  else {
    return "Is a Number";
  }
} //  returns: "Empty", "Not a Number", or "Is a Number" ?

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // let list; // = document.getElementById("faultyItems").value;
  let launchStatusId = document.querySelector("#launchStatus");
  //  input type error handling
  if (validateInput(pilot) === "Is a Number") {
    // return alert("Must not enter a number.");
    return;
  };
  if (validateInput(copilot) === "Is a Number") {
    // return alert("Must not enter a number.");
    return;
  };
  if (validateInput(fuelLevel) === "Not a Number") {
    // return alert("Must enter a number.");
    return;
  };
  if (validateInput(cargoLevel) === "Not a Number") {
    // return alert("Must enter a number.");
    return;
  };
  //  update launch checklist to display launch-ready status of pilot, copilot, fuel & cargo
  //    make #faultyItems visible
  document.querySelector("#faultyItems").style.visibility = "visible";
  //    use template literals to update list-items
  document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
  document.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
  //    handle insufficient fuel & cargo levels
  if (fuelLevel < 10000) {
    launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusId.style.color = "red";
    document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
    // return alert("Fuel level too low for launch");
    return;
  }
  if (cargoLevel > 10000) {
    launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusId.style.color = "red";
    document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    // return alert("Cargo mass too heavy for launch");
    return;
  }
  launchStatusId.innerHTML = "Shuttle is ready for launch";
  launchStatusId.style.color = "green";
}
/*
..........................................................................................................................
..........................................................................................................................

PART TWO: FETCH PLANETARY JSON DATA
          --> to update #missionTarget with random planet info

fetch planetary JSON data:
  review planetary list, choose a random destination, note its index number
    fetch multiple JSON objects to return an array of all planet JSON objects
      choose random destination planet via its array index number

  to fetch planetList data:

    1.  complete myFetch() to fetch planetary JSON data:
            add URL & return response.json()

    2.  pickPlanet() takes a planetList argument
            use Math.random() to return random index planet from planetList argument

    3.  addDestinationInfo() comments show innerHTML format for <div id="missionTarget">,
            save that element, no return value
............................................*/

async function myFetch() { // WORKS!
  return await fetch("https://handlers.education.launchcode.org/static/planets.json").then(response => response.json());
}

function pickPlanet(planets) { // WORKS!
  console.log("planets:", planets);

  const randomIndex = Math.floor(Math.random() * planets.length);
  console.log("randomIndex:", randomIndex);

  console.log("planets[randomIndex]:", planets[randomIndex]);
  return planets[randomIndex];
}

function addDestinationInfo( // WORKS!
  document,
  planetDestination
) {

  document.querySelector("#missionTarget").innerHTML =
    `<h2>Mission Destination</h2>
      <ol>
        <li>Name: ${planetDestination.name}</li>
        <li>Diameter: ${planetDestination.diameter}</li>
        <li>Star: ${planetDestination.star}</li>
        <li>Distance from Earth: ${planetDestination.distance}</li>
        <li>Number of Moons: ${planetDestination.moons}</li>
      </ol>
      <img src="${planetDestination.image}" />
    `;
}

//  ...................................................
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;