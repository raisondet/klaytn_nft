pragma solidity ^0.5.6;

import "./klaytn/token/KIP17/KIP17Full.sol";
import "./klaytn/drafts/Counters.sol";
import "./klaytn/ownership/Ownable.sol";

contract Who1NFT is KIP17Full, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private tokenId;

  string nftName = "WHO1";
  string nftSymbol = "WHN";
  constructor() public KIP17Full(nftName, nftSymbol){
  }

  function mintNFT(string memory _tokenURI) public onlyOwner returns (uint256) {
    tokenId.increment();

    uint256 newId = tokenId.current();   
    _mint(msg.sender, newId);
    _setTokenURI(newId, _tokenURI);

    return newId; 
  }
}