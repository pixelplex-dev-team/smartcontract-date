const Date = artifacts.require("./Date.sol");

module.exports = function(deployer) {
  deployer.deploy(Date);
};
