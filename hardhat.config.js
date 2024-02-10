require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/G9ABWVqeA4PGzekfbldh3o7ujpcq_oKH",
      accounts:["b0387e73c04a2640dfd39bd26535d5efe260d84db3e7aff759af07acb69dfdc5"]
    }
  }
};
