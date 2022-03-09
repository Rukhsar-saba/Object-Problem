function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const revertObj = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
  console.log(revertObj);
}
invert({ name: "Bruce Wayne", age: 36, location: "Gotham" });
