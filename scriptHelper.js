require("cross-fetch/polyfill");

/*  .........................

    PART ONE: VALIDATE INPUTS

      create launch checklist,
        validating shuttle info,
          preventing unready launch

    Astronaut Launch Checklist Form:

      1.  use preventDefault() to prevent sending request that reloads page

            if (error) { event.preventDefault(); alert("message"); }

            try-catch? --> predicts & bridges errors to continue code flow

      2.  ensure that each user-submitted input:

            A.  has a value

                  inputElementList.forEach(input => {
                    if (input.value.length === 0) {
                      alert("Must enter a value for each field.");
                    }
                  });

            B.  has correct data type

                  inputElementList.forEach(input => {

                    if (pilotNameInput.value.type === "text") {
                      if (copilotNameInput.value.type === "text") {

                      } else {}
                    } else {}

                    if (fuelLevel.type === "number") {
                      if (cargoMass.type === "number") {

                      } else {}
                    } else {}
                  });

      3.  input validation updates launch checklist:

            if (shuttle variable !== lanchReady) {
              add shuttle variable to <div id="faultyItems">
            }

          update <li> pilotStatus & copilotStatus
                  to include pilotName & copilotName
                    using template literals

          if (fuelLevel < 10,000 liters):
            list of #faultyItems.display: visible; ?
            fuelStatus = "not enough fuel for mission."; --> alert(""); ?
            <h2>.innnerHTML = ${launchStatus} = “Shuttle not ready for launch”;
            <h2>.color: red

          if (cargoMass > 10,000 kilograms):
            list of #faultyItems.display: visible; ?
            cargoStatus = "too much mass for shuttle to take off."; --> alert(""); ?
            launchStatus = “Shuttle not ready for launch” --> color: red;

      4.  if (all shuttle variables === launchReady) {
            indicate that shuttle is launch ready via DOM element.display: visible;
            launchStatus = “Shuttle is ready for launch” --> color: green;
          }
.................................*/

function validateInput(testInput) {
  // pilot & co-pilot names are strings
  // fuel level & cargo mass are numbers

  // string parameter --> returns "Empty", "Not a Number", "Is a Number"

}

function formSubmission(
  // PARAMETERS:
  document, // dom
  list, // array
  pilot, // string
  copilot, // string
  fuelLevel, // string?
  cargoLevel // string?
  ) {
  validateInput(pilot, copilot, fuelLevel, cargoLevel);

  //  NOTE: isNaN(value) method returns true or false
  //  update launch checklist with validated parameter values
  //  call formSubmission() in script.js

}

/*  ...............................

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