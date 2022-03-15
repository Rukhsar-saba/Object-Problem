function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  // for (const [key, value] of Object.entries(obj)) {
  //   console.log(`${key}: ${value}`);
  // }

  for (var key in obj) {
    var newKey = key;
    var newValue = obj[key];
    console.log(`${newKey}: ${newValue}`);
  }
}
pairs({ name: "Bruce Wayne", age: 36, location: "Gotham" });
