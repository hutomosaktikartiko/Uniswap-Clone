require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cvTX8DzgEuwuUaKt5Gv098uk_yq6Tf3Q',
      accounts: [
        'b8f06d9458c3d173fb25939ad8dbfd0e218ee2547f19fa05cf29d2519c361af2'
      ]
    }
  }
};
