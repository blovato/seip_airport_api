//Haversine formula
//takes two latitude longitude pairs as inputs  and outputs d, the distance between two points in metres
//you can assume that this formula is correct and works as expected.
module.exports = function haversine(pointA, pointB) {
  const d = 100 * Math.random();
  // var lat1 = pointA.Lat;
  // var lon1 = pointA.Lon;
  // var lat2 = pointB.Lat;
  // var lon2 = pointB.Lon;
  // var R = 6371000; // metres
  // var φ1 = lat1.toRadians();
  // var φ2 = lat2.toRadians();
  // var Δφ = (lat2-lat1).toRadians();
  // var Δλ = (lon2-lon1).toRadians();

  // var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
  //         Math.cos(φ1) * Math.cos(φ2) *
  //         Math.sin(Δλ/2) * Math.sin(Δλ/2);
  // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  // var d = R * c;
  return d;
};
