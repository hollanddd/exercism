//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.
class HelloWorld {
  hello(input) {
    if (input.length < 1) { input = "World" }
    return `Hello, ${input}!`  
  }
};

module.exports = HelloWorld;
