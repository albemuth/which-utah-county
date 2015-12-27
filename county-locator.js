
const _ = require('lodash');
const counties = [
  { name: 'Beaver', coords: '38.34°N 113.23°W' },
  { name: 'Box Elder', coords: '41.51°N 113.10°W' },
  { name: 'Cache', coords: '41.69°N 111.75°W' },
  { name: 'Carbon', coords: '39.64°N 110.58°W' },
  { name: 'Daggett', coords: '40.89°N 109.51°W' },
  { name: 'Davis', coords: '41.01°N 112.12°W' },
  { name: 'Duchesne', coords: '40.28°N 110.44°W' },
  { name: 'Emery', coords: '38.99°N 110.69°W' },
  { name: 'Garfield', coords: '37.87°N 111.44°W' },
  { name: 'Grand', coords: '38.99°N 109.56°W' },
  { name: 'Iron', coords: '37.86°N 113.28°W' },
  { name: 'Juab', coords: '39.71°N 112.80°W' },
  { name: 'Kane', coords: '37.29°N 111.89°W' },
  { name: 'Millard', coords: '39.05°N 113.10°W' },
  { name: 'Morgan', coords: '41.08°N 111.58°W' },
  { name: 'Piute', coords: '38.34°N 112.13°W' },
  { name: 'Rich', coords: '41.62°N 111.24°W' },
  { name: 'Salt Lake', coords: '40.67°N 111.93°W' },
  { name: 'San Juan', coords: '37.63°N 109.81°W' },
  { name: 'Sanpete', coords: '39.37°N 111.58°W' },
  { name: 'Sevier', coords: '38.75°N 111.80°W' },
  { name: 'Summit', coords: '40.88°N 110.97°W' },
  { name: 'Tooele', coords: '40.45°N 113.18°W' },
  { name: 'Uintah', coords: '40.13°N 109.52°W' },
  { name: 'Utah', coords: '40.12°N 111.67°W' },
  { name: 'Wasatch', coords: '40.33°N 111.16°W' },
  { name: 'Washington', coords: '37.28°N 113.52°W' },
  { name: 'Wayne', coords: '38.36°N 110.90°W' },
  { name: 'Weber', coords: '41.30°N 111.92°W' } 
].map(function(county) {
  return {
    name: county.name,
    coords: {
      latitude: parseFloat(county.coords.split(' ')[0]),
      longitude: -parseFloat(county.coords.split(' ')[1])
    }
  }
});

function distance(a, b) {
  return Math.sqrt(
    Math.pow(a.latitude - b.latitude, 2) +
      Math.pow(a.longitude - b.longitude, 2)
  );
}

module.exports = {
  locate: function(coords, only) {
    return _.chain(counties)
    .filter(function(county) {
      return !only || _.contains(only, county.name)
    })
    .sortBy(function(county) {
      return distance(county.coords, coords)
    }).first().value()
  }
};
