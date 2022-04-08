const { ethers } = require("ethers");
const { infuraApiKey } = require("./PrivateKeys/infuraKey");

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${infuraApiKey}`
);

const main = async () => {
  const balance = await provider.getBalance(
    "0x7CFB6A3Cb07b9F9B627ee2c0935F3A3FB71E3e1F"
  );

  console.log("Balance : ", ethers.utils.formatEther(balance));
};

main();
