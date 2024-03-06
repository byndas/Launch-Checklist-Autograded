const {
  addDestinationInfo,
  validateInput,
  formSubmission,
  pickPlanet,
  myFetch
} = require("./scriptHelper.js");

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch(); // returns a promise that returns a data-object

  //  PART ONE: VALIDATE INPUTS
  //  .........................
  //    create launch checklist:
  //      validate shuttle launch variables,
  //        prevent unready launch
  //          indicate when launch ready
  //  ..................................

  formSubmission(someArgs); // call somewhere here

  //  PART TWO: FETCH PLANETARY DATA
  //  ..............................
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      //  open browser dev tools to see planet list
      console.log(listedPlanets);

      //  use pickPlanet() & addDestinationInfo() helper functions
      //    to select random planet from listedPlanets
      //      & pass that planet info to addDestinationInfo()
      //        reload page to see mission target info
    });
});