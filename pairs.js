function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  console.log(Object.entries(obj));
}
pairs({ name: "Bruce Wayne", age: 36, location: "Gotham" });
