/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle")
const INFURA_API_KEY = "9b142345d9824433a7eb296978ee957f";
const ROPSTEN_PRIVATE_KEY= "c7ad9047ce919cdb8275eced366f578613ad5c0738057dc0e7547f868cb9095b";
//const RINKEBY_PRIVATE_KEY = "c7ad9047ce919cdb8275eced366f578613ad5c0738057dc0e7547f868cb9095b";
module.exports = {
  solidity: "0.8.9",

  networks:{
    ropsten:{
      url: `https://ropsten.infura.io/v3/9b142345d9824433a7eb296978ee957f`,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`],
      // url:"https://eth-rinkeby.alchemyapi.io/v2/5YZ3sCFRbAXwMv_8NqR13e9ZCNFGj2G_",
      // accounts:["c7ad9047ce919cdb8275eced366f578613ad5c0738057dc0e7547f868cb9095b"],
    }
  }
};



