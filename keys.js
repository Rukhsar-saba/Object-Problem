function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  console.log(Object.keys(obj));
}
keys({ name: "Bruce Wayne", age: 36, location: "Gotham" });
