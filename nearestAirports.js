const haversine = require('./haversine');

function findNearestAirports(airportA = {}, airports = [], sliceLength) {
  return airports
  // remove this airport from the list
    .filter(function (airport) {
      return airport.LocationID !== airportA.LocationID;
    })
    // add the distance as a field to the airports
    .map(function (airport) {
      return Object.assign(
        {},
        airport,
        { distance: haversine(airportA, airport) },
      );
    })
    // sort by nearest to farthest
    .sort(function (airport, airportB) {
      return airport.distance - airportB.distance;
    })
    // get segment of nearest airports, optionally
    .slice(0, sliceLength || airports.length);
}

module.exports = function findNearestThreeAirports(airportA, airports) {
  return findNearestAirports(airportA, airports, 3);
};
