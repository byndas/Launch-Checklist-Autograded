require("cross-fetch/polyfill");

/*  TASK FLOW

on form submit:

  PART ONE: VALIDATE INPUTS
    if any fail,
      prevent page re-load,
      add that shuttle info with shuttle-launch-unready-message to #faultyItems display
      alert("errorMessage"),
    otherwise, update #launchStatus to display "Shuttle is launch ready"

  PART TWO: FETCH PLANETARY JSON DATA --> planetList API
    select random planet from data response via its index number,
    add that planet's json data to #missionTarget

..........................................................................................................................
..........................................................................................................................

    PART ONE: VALIDATE INPUTS

      compose launch checklist --formSubmission-- function that:
        validates shuttle info,
          prevents unready launch

    Launch Checklist Form:

      1.  SubmitEvent.preventDefault() prevents page re-loading request send

      2.  validate that each input has a value of correct data type

      3.  update launch checklist with valid input values:

            if (shuttle variable !== lanchReady) {
              add shuttle variable to <div id="faultyItems">
            }

          update <li> pilotStatus & copilotStatus
            to include pilotName & copilotName
              using template literals

          if (fuelLevel < 10,000 liters):
            list of #faultyItems.display: visible;
            fuelStatus = "not enough fuel for mission."; --> alert("");
            <h2>.innnerHTML = ${launchStatus} = “Shuttle not ready for launch”;
            <h2>.color: red

          if (cargoMass > 10,000 kilograms):
            list of #faultyItems.display: visible;
            cargoStatus = "too much mass for shuttle to take off."; --> alert("");
            launchStatus = “Shuttle not ready for launch” --> color: red;

      4.  if (all shuttle variables === launchReady) {
            indicate that shuttle is launch ready via DOM element.display: visible;
            launchStatus = “Shuttle is ready for launch” --> color: green;
          }
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
  document, // D.O.M.
  list, // array ?
  pilot, // text in string
  copilot, // text in string
  fuelLevel, // number in string
  cargoLevel // number in string
  ) {
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

  //  3.  update launch checklist with valid parameter input values

/*
A.  if (shuttle variable !== lanchReady) {
      add shuttle variable to <div> #faultyItems
    }

B.   use template literals to update: <li> (#pilotStatus & #copilotStatus).innerHTML = pilot & copilot

C.  if (fuelLevel < 10000) {

      list of #faultyItems.display: visible; ?

      #fuelStatus.innerHTML = "not enough fuel for mission.";
      alert("not enough fuel for mission.");

      <h2> #launchStatus.innerHTML = “Shuttle not ready for launch”;
      <h2> #launchStatus.color: red;
    }

D.  if (cargoMass > 10000) {

      list of #faultyItems.display: visible; ?

      #cargoStatus.innerHTML = "too much mass for shuttle to take off.";
      alert("too much mass for shuttle to take off.");

      <h2> #launchStatus.innerHTML = “Shuttle not ready for launch”;
      <h2> #launchStatus.color: red;
    }
  }
/*
..........................................................................................................................
..........................................................................................................................

PART TWO: FETCH PLANETARY JSON DATA

      5.  update mission destination planet info


fetch planetary JSON data to inform crew of mission destination planet:
  review planetary list, choose a random destination, note its index number
    fetch multiple JSON objects to return an array of all planet JSON objects
      choose random destination planet via its array index number

  to fetch planet list data:

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

  planetsReturned = await fetch().then(function (response) {});

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