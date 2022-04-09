const { ethers } = require("ethers");
const { infuraApiKey } = require("./PrivateKeys/infuraKey");

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${infuraApiKey}`
);

const DAIcontract = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const contract = new ethers.Contract(DAIcontract, ERC20_ABI, provider);
const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log("DAIcontract : ", DAIcontract);
  console.log("Name : ", name);
  console.log("Symbol : ", symbol);
  console.log("Total Supply : ", ethers.utils.formatEther(totalSupply));
};

main();
