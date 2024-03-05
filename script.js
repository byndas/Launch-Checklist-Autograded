//  create a launch checklist
//    that validates all shuttle launch info
//      to prevent premature shuttle launch

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch(); // returns a value

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      //  call helper functions to pick a planet from listedPlanets
      //  & add that planet info to your destination
    });
});



/*  Astronaut Launch Prep Checklist Form:
      1.  use preventDefault() to prevent sending a request that reloads page
      2.  validate user-submitted data to ensure:
            A.  user enters input for each field
            B.  user enters text for names but numbers for fuel & cargo levels
      3.  use validation to update a list of launch-ready shuttle info
      4.  indicate shuttle state & if shuttle is launch-ready via DOM updating CSS
      5.  fetch planetary JSON to update mission destination info

2A  alert user if no entered value for any of field --> "Must enter a value for each field."
............................................................................................

TASK 3: FETCHING PLANETARY DATA

fetch JSON to inform crew of mission destination
planetary data is in JSON format
review planetary list, choose a destination & note its index number
    fetching multiple JSON objects returns an array of all JSON object planets
    choose a destination planet from the array via its index number

scriptHelper.js has three functions for this task:
    myFetch(), pickPlanet(), addDestinationInfo()

    addDestinationInfo() comments show innerHTML format for <div id="missionTarget">,
        locate that element using addDestinationInfo()'s document parameter

    addDestinationInfo() needs no return value

    pickPlanet() takes a planet list argument
        use Math.random() to return a planet from the argument list with a random index

    myFetch() has some incomplete code to fetch planetary JSON
        simply add the URL & return response.json()

use these script.js helper functions
....................................

some necessary code:

   let listedPlanets;
   let listedPlanetsResponse;

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       // console.log(listedPlanets);
   }).then(function () {
       // console.log(listedPlanets);
       // call helper functions to select random planet from listedPlanets & add that info to destination
   })
..........................................................................................................
THEN:
  listedPlanetsResponse = myFetch(); --> returns a promise
  open browser dev tools to see planet list
  use pickPlanet() & addDestinationInfo() to select random planet from listedPlanets
  pass that info to addDestinationInfo() & reload page to see mission target info

*/