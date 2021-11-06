require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    }
  },
  solidity: "0.7.3",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};