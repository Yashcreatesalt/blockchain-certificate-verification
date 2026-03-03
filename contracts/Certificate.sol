// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certificate {

    address public admin;

    mapping(bytes32 => bool) private certificates;

    event CertificateIssued(bytes32 certificateHash);

    constructor() {
        admin = msg.sender;
    }

    function issueCertificate(bytes32 _certificateHash) public {
        require(msg.sender == admin, "Only admin can issue certificates");
        certificates[_certificateHash] = true;
        emit CertificateIssued(_certificateHash);
    }

    function verifyCertificate(bytes32 _certificateHash) public view returns (bool) {
        return certificates[_certificateHash];
    }
}
