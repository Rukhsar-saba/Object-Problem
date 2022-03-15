function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  for (var key in obj) {
    var newKey = obj[key];
    var newValue = key;
    console.log(`${newKey}: ${newValue}`);
  }
}
invert({ name: "Bruce Wayne", age: 36, location: "Gotham" });
