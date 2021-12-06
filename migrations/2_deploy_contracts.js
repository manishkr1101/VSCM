const Beneficiary = artifacts.require("Beneficiary");
const VaccineRegistry = artifacts.require("VaccineRegistry");
const Feedback = artifacts.require("Feedback");

module.exports = function(deployer) {
  deployer.deploy(Beneficiary)
  .then(() => deployer.deploy(VaccineRegistry, Beneficiary.address))
  .then(() => deployer.deploy(Feedback, VaccineRegistry.address))

};
