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

  //  1.  input validation
  if (testInput.length === 0) {
    SubmitEvent.preventDefault();
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
  list, // array of remaining parameters or <li> list-items ? --> list = document.querySelector("#---") ?
  pilot, // text in string
  copilot, // text in string
  fuelLevel, // number in string
  cargoLevel // number in string
  ) {
  const launchStatusId = document.querySelector("#launchStatus");
  //  2.  input type error handling
  if (validateInput(pilot) === "Is a Number") {
    SubmitEvent.preventDefault();
    return alert("Must not enter a number.");
  };
  if (validateInput(copilot) === "Is a Number") {
    SubmitEvent.preventDefault();
    return alert("Must not enter a number.");
  };
  if (validateInput(fuelLevel) === "Not a Number") {
    SubmitEvent.preventDefault();
    return alert("Must enter a number.");
  };
  if (validateInput(cargoLevel) === "Not a Number") {
    SubmitEvent.preventDefault();
    return alert("Must enter a number.");
  };
  //  3.  update launch checklist to display launch-ready status of pilot, copilot, fuel & cargo
  //    A.  make #faultyItems visible
  document.querySelector("#faultyItems").style.visibility = "visible";
  //    B.  use template literals to update list-items
  document.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
  document.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
  //    C.  handle insufficient fuel & cargo levels
  if (fuelLevel < 10000) {
    launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusId.stlye.color = "red";
    document.querySelector("#fuelStatus").innerHTML = "Fuel level too low for launch";
    return alert("Fuel level too low for launch");
  }
  if (cargoMass > 10000) {
    launchStatusId.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusId.style.color = "red";
    document.querySelector("#cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    return alert("Cargo mass too heavy for launch");
  }
  launchStatusId.innerHTML = "Shuttle is ready for launch";
  launchStatusId.syle.color = "green";
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
            add the URL
            return response.json()

    2.  pickPlanet() takes a planetList argument
            use Math.random() to return random index planet from planetList argument

    3.  addDestinationInfo() comments show innerHTML format for <div id="missionTarget">,
            save that element using addDestinationInfo()'s document parameter
            addDestinationInfo() needs no return value
....................................................*/

async function myFetch() {
  // try-catch? --> predicts & bridges errors to continue code flow
  let planetsReturned;

  planetsReturned = await fetch(someURLstring).then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  /*  add within #missionTarget:

        <h2>Mission Destination</h2>
        <ol>
            <li>Name: </li>
            <li>Diameter: </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: </li>
            <li>Number of Moons: </li>
        </ol>
        <img src="">  */
}

//  ...................................................
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;