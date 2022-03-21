const who1NFT = artifacts.require('Who1NFT.sol');
const fs = require('fs');

module.exports = function (deployer) {
  deployer.deploy(who1NFT).then(() => {
    if (who1NFT._json) {
      // 1. Record recently deployed contract's abi file to 'deployedABI'
      fs.writeFile(
        'deployedABI',
        JSON.stringify(who1NFT._json.abi, 2),
        (err) => {
          if (err) throw err;
          console.log(
            `The abi of ${who1NFT._json.contractName} is recorded on deployedABI file`
          );
        }
      );
    }

    // 2. Record recently deployed contract's address to 'deployedAddress'
    fs.writeFile('deployedAddress', who1NFT.address, (err) => {
      if (err) throw err;
      console.log(
        `The deployed contract address * ${who1NFT.address} * is recorded on deployedAddress file`
      );
    });
  });
};
