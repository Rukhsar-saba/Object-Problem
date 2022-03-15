function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values

  for (var key in obj) {
    var value = obj[key];
    console.log(value);
  }
}
values({ name: "Bruce Wayne", age: 36, location: "Gotham" });
