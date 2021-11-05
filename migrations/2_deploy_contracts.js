const Person = artifacts.require("Person");
const Vaccine = artifacts.require("Vaccine");
const Feedback = artifacts.require("Feedback");

module.exports = function(deployer) {
  deployer.deploy(Person);
  deployer.deploy(Vaccine);
  deployer.deploy(Feedback);
};
