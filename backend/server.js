const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

// ⚠️ AFTER DEPLOYMENT, REPLACE THESE VALUES
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const abi = [
  "function issueCertificate(bytes32 _certificateHash)",
  "function verifyCertificate(bytes32 _certificateHash) view returns (bool)"
];

const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);

function hashCertificate(data) {
  return ethers.keccak256(ethers.toUtf8Bytes(data));
}

app.post("/issue", async (req, res) => {
  try {
    const { studentName, course } = req.body;
    const data = studentName + course;
    const hash = hashCertificate(data);

    const tx = await contract.issueCertificate(hash);
    await tx.wait();

    res.json({ message: "Certificate issued", hash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/verify", async (req, res) => {
  try {
    const { studentName, course } = req.body;
    const data = studentName + course;
    const hash = hashCertificate(data);

    const isValid = await contract.verifyCertificate(hash);

    res.json({ valid: isValid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
