const Web3 = require("web3");
const ABI = require("./ABI");

// Input variables
const contractAddress = "0x92F283FaC9b77c0a91C320fFA921b7423294D3da";
const accountFrom = {
  privateKey:
    "4f0b6e7d3217fc93e062f6b3d6dc0cb53278870bf1f02fb8ab86d317eadcd07a",
  address: "0x973C7Bb7AB40C15Ae4d248e4034878e0Df3f92c8",
};
const addressTo = "0xE4f4b37F70fEDAA6F2Eea10995a09fC4C16986Da";
const value = 1;

// connect a eth node
const provider =
  "https://eth-goerli.nownodes.io/6d0dc893-1c8d-449c-b2aa-5d5ab863a7c5";
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

// create contract
let contract = new web3.eth.Contract(ABI, contractAddress);

// create transfer data
const amount = web3.utils.toBN(value);
const data = contract.methods.transfer(addressTo, amount).encodeABI();

// Create send function
const send = async () => {
  console.log(
    `Attempting to send transaction from ${accountFrom.address} to ${addressTo}`
  );

  // Sign transaction with PK
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      gas: 50000,
      to: contractAddress,
      data: data,
    },
    accountFrom.privateKey
  );

  // Send transaction and wait for receipt
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log(
    `Transaction successful with hash: ${createReceipt.transactionHash}`
  );
};

// Call send function
send();
