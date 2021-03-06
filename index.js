function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(name => name.toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(name) { return {firstName: name.split(" ")[0], lastName: name.split(" ")[1]}});
  return newDrivers;
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
