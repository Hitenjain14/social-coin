//@ts-nocheck
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://speedy-nodes-nyc.moralis.io/39f9e12bf020c85e5091c894/polygon/mumbai'
  );
  web3 = new Web3(provider);
}

export default web3;
