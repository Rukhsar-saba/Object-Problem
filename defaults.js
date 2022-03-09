function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  let attr = "lastName";
  let newObj = Object.hasOwn(obj, attr) ? obj[attr] : defaultProps;
  console.log(newObj);
}
defaults({ name: "Bruce Wayne", age: 36, location: "Gotham" }, "defaultValue");
