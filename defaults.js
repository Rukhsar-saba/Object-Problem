function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  for (var key in obj) {
    if (key === defaultProps && obj[key] == null) {
      obj[defaultProps] = "Male";
    }
    var newKey = key;
    var newValue = obj[key];
    console.log(`${newKey}: ${newValue}`);
  }
}
defaults(
  { name: "Bruce Wayne", age: 36, location: "Gotham", gender: null },
  "gender"
);
