// SPDX-License-Identifier: SPDX
pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract Token {
  string public name = "Blockchain Master University";
  string public symbol = "BMU";

  uint256 public totalSupply = 1000000;
  address public owner;
  mapping(address => uint256) balances;
}