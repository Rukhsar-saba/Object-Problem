function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

  for (var key in obj) {
    var value = key;
    console.log(value);
  }
}
keys({ name: "Bruce Wayne", age: 36, location: "Gotham" });
