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
    alert("Must enter a value for each field.");
    return "Empty";
  }

  if (isNaN(testInput)) {
    return "Not a Number";
  }
  else {
    return "Is a Number";
  }
} //  returns: "Empty", "Not a Number", or "Is a Number" ?

function formSubmission(
  // PARAMETERS:
  document, // D.O.M. --> unnecessary
  list, // document.querySelector("#launchStatus") ?
  pilot, // text in string
  copilot, // text in string
  fuelLevel, // number in string
  cargoLevel, // number in string
  event
  ) {
  let launchStatusId = document.querySelector("#launchStatus");
  //  input type error handling
  if (validateInput(pilot, event) === "Is a Number") {
    return alert("Must not enter a number.");
  };
  if (validateInput(copilot, event) === "Is a Number") {
    return alert("Must not enter a number.");
  };
  if (validateInput(fuelLevel, event) === "Not a Number") {
    return alert("Must enter a number.");
  };
  if (validateInput(cargoLevel, event) === "Not a Number") {
    return alert("Must enter a number.");
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
    launchStatusId.stlye.color = "red";
    document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
    return alert("Fuel level too low for launch");
  }
  if (cargoLevel > 10000) {
    launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusId.style.color = "red";
    document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    return alert("Cargo mass too heavy for launch");
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

async function myFetch() {
  await fetch("https://handlers.education.launchcode.org/static/planets.json").then(response => response.json());
}

function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);

  console.log("planets[randomIndex]:", planets[randomIndex])
  return planets[randomIndex];
}

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.querySelector("#missionTarget").innerHTML =
    `<h2>Mission Destination</h2>
      <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>
    `;
}

//  ...................................................
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;