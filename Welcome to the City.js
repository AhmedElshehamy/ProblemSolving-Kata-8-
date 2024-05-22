function sayHello(name, city, state) {
  //   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
  let fullName = "";
  for (let i = 0; i < name.length; i++) {
    fullName += name[i] + " ";
  }
  return `Hello, ${fullName.slice(0, -1)}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));

// Hello, John Smith! Welcome to Phoenix, Arizona!
