require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
// const { ACCOUNT_PRIVATE_KEY,ALCHEMY_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  // defaultNetwork: "rinkeby",
  paths: {
    artifacts: "./client/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    rmit: {
      url: `https://mainnet.rmit.site`,
      chainId: 202306,
      accounts: [`e1433b5f4857ebeb94957170a74e986dcfe773453bf49432b2ac31a4f6a4b40e`]
    }
  },
};
