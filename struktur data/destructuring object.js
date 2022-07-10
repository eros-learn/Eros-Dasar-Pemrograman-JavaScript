const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName, lastName, age: ages } = profile;

console.log(firstName, lastName, ages);

/* output:
John Doe 18
*/