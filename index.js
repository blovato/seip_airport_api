const findNearestThreeAirports = require('./nearestAirports');
const haversine = require('./haversine');
const alaskaAirports = require('./alaska_airports.json');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.get('/alaskan-airports', (req, res) => {
  // TODO: filter by LocationID?
  res.send(alaskaAirports);
});

app.post('/distance-between-alaskan-airports', (req, res) => {
  const { airportA, airportB } = req.body || {};

  res.send(
    JSON.stringify({
      distance: haversine(airportA, airportB),
    })
  );
});

app.post('/nearest-three-alaskan-airports', (req, res) => {
  const { airport } = req.body || {};
  if (!airport) {
    res.sendStatus(400);
    return;
  }
  res.send(
    JSON.stringify(
      findNearestThreeAirports(airport, alaskaAirports)
    )
  );
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
