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


//  PART ONE: VALIDATE INPUTS
//    create launch checklist,
//      validating shuttle info,
//        preventing unready launch

// pilot & co-pilot names are strings
// fuel level & cargo mass are numbers
function validateInput(testInput) {
  // string parameter --> returns "Empty", "Not a Number", "Is a Number"


}

// use validateInput() to complete formSubmission()
// document parameter & strings for pilot, co-pilot, fuelLevel, cargo mass
function formSubmission(
  // PARAMETERS:
  document, // dom?
  list, // array?
  pilot, // string
  copilot, // string
  fuelLevel, // string?
  cargoLevel // string?
) {
  // NOTE: isNaN(value) method returns true if value is NaN
  // use values in strings & use document parameter for HTML document to update launch checklist
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

/*.....................

PART 1: VALIDATE INPUTS

  Astronaut Launch Prep Checklist Form:

      1.  use preventDefault() to prevent sending a request that reloads page
            if (error) { event.preventDefault(); alert("message"); }
            try-catch?  predicts & bridges errors allowing code flow to continue
            logical, digital, system architecture
      2.  ensure user-submitted data:
            A.  enters input for each field
                --> if (input.value.length === 0) {};
            B.  enters text for names but numbers for fuel & cargo levels
            --> inputElementList.forEach(input => {
                  if (pilotNameInput.value.type === "text") {
                    if (copilotNameInput.value.type === "text") {}
                  }
                  if () {}
                })
      3.  use validation to update a list of launch-ready shuttle info
      4.  indicate shuttle state & if shuttle is launch-ready via DOM updating CSS
      5.  fetch planetary JSON to update mission destination info

2A  alert user if any field lacks input value --> "Must enter a value for each field."
.......................................................................................

PART 2: FETCH PLANETARY DATA

fetch JSON to inform crew of mission destination
planetary data is in JSON format
review planetary list, choose a destination & note its index number
    fetching multiple JSON objects returns an array of all JSON object planets
    choose a destination planet from the array via its index number

scriptHelper.js has three functions to fetch planet list data:

    1.  complete myFetch() to fetch planetary JSON
            add the URL
            return response.json()

    2.  addDestinationInfo() comments show innerHTML format for <div id="missionTarget">,
            save that element using addDestinationInfo()'s document parameter
            addDestinationInfo() needs no return value

    3.  pickPlanet() takes a planetList argument
            use Math.random() to return random index planet from planetList argument
....................................................................................
*/

/*
update shuttle launch checklist
  if shuttle detail unready for launch:
    <div id="faultyItems">

update <li> pilotStatus & copilotStatus
  to include pilot & co-pilot name
    using template literals

If (user submits fuelLevel < 10,000 liters):
  list of #faultyItems.display: visible;
  fuelStatus = "not enough fuel for mission."; --> alert(""); ?
  <h2>.innnerHTML = ${launchStatus} = “Shuttle not ready for launch”;
  <h2>.color: red

If (user submits cargo mass > 10,000 kilograms):
  list of #faultyItems.display: visible;
  cargoStatus = "too much mass for shuttle to take off."; --> alert(""); ?
  launchStatus = “Shuttle not ready for launch” --> color: red;

If shuttle launch-ready:
  launchStatus = “Shuttle is ready for launch” --> color: green;

*/