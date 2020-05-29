function sovle(firstName, lastName, age) {
  person = {
    firstName,
    lastName,
    age,
  };
  let entries = Object.entries(person);
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
