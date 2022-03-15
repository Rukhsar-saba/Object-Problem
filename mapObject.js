function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject

  const mappedObj = {};
  for (let key in obj) {
    mappedObj[key] = cb(obj[key]);
  }
  console.log(mappedObj);
}
cb = (x) => "maped: " + x;

mapObject({ name: "Bruce Wayne", age: 36, location: "Gotham" }, cb);
