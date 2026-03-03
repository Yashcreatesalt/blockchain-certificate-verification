# **Blockchain Certificate Verification System-**

## Tech Stack:

* Solidity
* Hardhat
* Node.js
* Express
* ethers.js

## Features:

* Admin issues certificate
* Certificate stored as hash on blockchain
* Anyone can verify certificate
* Decentralized verification logic

## 

## \# **Blockchain Certificate Verification System**-

## A decentralized certificate verification system built using Solidity smart contracts and a Node.js backend. Certificates are hashed and stored on the Ethereum blockchain, enabling tamper-proof verification.

## 

## **How to Run:**

1. Install dependencies:
   npm install
2. Start local blockchain:
   npx hardhat node
3. Deploy contract (new terminal):
   npx hardhat run scripts/deploy.js --network localhost
4. Copy:

   * Contract address
   * First private key

5. Paste them into backend/server.js
6. Start backend:
   npm start

Server runs at:
http://localhost:3000



**## Screenshots:**



\### Hardhat Local Blockchain

!\[Hardhat Node](images/Node(1).png ,Node(2).png ,Node(3).png ,Node(4).png)



\### Smart Contract Deployment

!\[Contract Deployment](images/Deploy.png)



\### Issue Certificate API

!\[Issue Certificate](images/Issue.png)



\### Verify Certificate API

!\[Verify Certificate](images/Verify.png)

