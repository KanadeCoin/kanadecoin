var KanadeCoin = artifacts.require("./KanadeCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(KanadeCoin, {gas: 4700000});
};
