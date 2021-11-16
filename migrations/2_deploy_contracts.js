const Beneficiary = artifacts.require("Beneficiary");
// const Vaccine = artifacts.require("Vaccine");
// const Feedback = artifacts.require("Feedback");

module.exports = function(deployer) {
  deployer.deploy(Beneficiary);
  // deployer.deploy(Vaccine);
  // deployer.deploy(Feedback);
};
