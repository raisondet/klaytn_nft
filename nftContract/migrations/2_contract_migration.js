const who1NFT = artifacts.require('Who1NFT.sol');

module.exports = function (deployer) {
  deployer.deploy(who1NFT);
};
