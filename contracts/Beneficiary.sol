// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Beneficiary {
    uint registrationCount;
    mapping(address => bool) public registered;
    mapping(bytes => bool) registered_aadhar;
    mapping(address => bytes) person_hash;

    address ADMIN_ADDRESS;
    mapping(address => uint) public roles;

    
    
    constructor() public {
        registrationCount = 0;
        ADMIN_ADDRESS = msg.sender;
        addRole(ADMIN_ADDRESS, 99);
        addRole(0x66ca9Ed69be2D8C9D236234EeF0a80F56e872Cc4, 2);
    }
    
    function verifyAadhaar(uint _aadhaar) public pure returns(bool) {
        require(_aadhaar < 999999999999);
        return true;
    }

    function registerBeneficiary(bytes memory aadhar_Hash, bytes memory _P_Hash) public {
        
        require(registered_aadhar[aadhar_Hash] == false, "Already registered");
        require(registered[msg.sender] == false, "Already registered");
        
        person_hash[msg.sender] = _P_Hash;
        registered[msg.sender] = true;
        registered_aadhar[aadhar_Hash] = true;
        registrationCount += 1;
    }
    // TODO : remove
    function myHash() public view returns(bytes memory) {
        return ((person_hash[msg.sender]));
    }

    
    function concat(bytes memory a, bytes memory b) public pure returns(bytes memory){
        return((abi.encodePacked(a,"$",b)));
    }

    // TODO : remove
    function hash1(bytes memory b) public pure returns(string memory) {
        return (string(abi.encodePacked(keccak256(b))));
    }

    // TODO : remove
    function hash2(string memory s) public pure returns(bytes memory) {
        // return (string(abi.encodePacked(keccak256(bytes(s)))));
        return abi.encodePacked(sha256(bytes(s)));
    }

    // TODO : remove
    function validate2(bytes memory hash_PI, bytes memory hash_secret, address beneficiary_address) public view returns(bytes memory) {
        // get P_Hash
        // bytes memory P_Hash = abi.encodePacked(sha256(concat(hash_PI, hash_secret)));
        return person_hash[beneficiary_address];
    }

    function validate(bytes memory hash_PI, bytes memory hash_secret, address beneficiary_address) public view returns(bool) {
        // get P_Hash
        bytes memory P_Hash = abi.encodePacked(sha256(concat(hash_PI, hash_secret)));
        bytes memory to_compare = abi.encodePacked((person_hash[beneficiary_address]));
        return keccak256(P_Hash) == keccak256(to_compare);
    }

    // TODO : remove
    function validate3(bytes memory hash_PI, bytes memory hash_secret, address beneficiary_address) public pure returns(bytes memory) {
        // get P_Hash
        bytes memory P_Hash = abi.encodePacked(sha256(concat(hash_PI, hash_secret)));
        return P_Hash;
    }


    function addRole(address user_address, uint role) public {
        // require(msg.sender == ADMIN_ADDRESS, "USER IS NOT ADMIN");
        roles[user_address] = role;
    }
    
    function getRegisteredCount() public view returns(uint) {
        return registrationCount;
    }
    
}

