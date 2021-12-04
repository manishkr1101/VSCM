// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Beneficiary {
    uint registrationCount;
    mapping(address => Person) persons;
    mapping(address => bool) public registered;
    mapping(bytes => bool) registered_aadhar;
    mapping(address => bytes) person_hash;

    address ADMIN_ADDRESS;
    mapping(address => uint) public roles;
    uint256 phase2Time;

    struct Person {
        uint aadhaar;
        string name;
        uint16 age;
        bool complicacy;
    }
    
    constructor() public {
        phase2Time = 1637334500990;
        registrationCount = 0;
        ADMIN_ADDRESS = 0x095f557754761fE760Dd9b623CC5e7E70D4f342B;
        addRole(ADMIN_ADDRESS, 99);
        addRole(0x66ca9Ed69be2D8C9D236234EeF0a80F56e872Cc4, 1);
    }
    
    function verifyAadhaar(uint _aadhaar) public pure returns(bool) {
        require(_aadhaar < 999999999999);
        return true;
    }
    
    // function registerBeneficiary(uint _aadhaar, string memory _name, uint16 _age, bool _comp) public {
    //     if(block.timestamp > phase2Time) {
    //         require(_age >= 18);
    //     }
    //     else {
    //         require(_age >= 50, "Age must be greater equal than 50");
    //     }
    //     require(verifyAadhaar(_aadhaar), "Invalid Aadhaar");
    //     require(registered[msg.sender] == false, "Already registered");
    //     Person memory p = Person(_aadhaar, _name, _age, _comp);
        
    //     persons[msg.sender] = p;
    //     registered[msg.sender] = true;
    //     registrationCount += 1;
    // }
    mapping(bytes => address) temp;
    function attach(bytes memory _hash) public {
        temp[_hash] = msg.sender;
    }
    function tempval(bytes memory st) public view returns(address) {
        bytes memory _hash = abi.encodePacked(sha256(st));
        return temp[_hash];
    }
    function registerBeneficiary(bytes memory aadhar_Hash, bytes memory _P_Hash) public {
        
        require(registered_aadhar[aadhar_Hash] == false, "Already registered");
        require(registered[msg.sender] == false, "Already registered");
        
        person_hash[msg.sender] = _P_Hash;
        registered[msg.sender] = true;
        registered_aadhar[aadhar_Hash] = true;
        registrationCount += 1;
    }

    function concat(bytes memory a, bytes memory b) public pure returns(bytes memory){
        return((abi.encodePacked(a,"$",b)));
    }

    function hash1(bytes memory b) public pure returns(string memory) {
        return (string(abi.encodePacked(keccak256(b))));
    }

    function hash2(string memory s) public pure returns(bytes memory) {
        // return (string(abi.encodePacked(keccak256(bytes(s)))));
        return abi.encodePacked(sha256(bytes(s)));
    }

    function validate2(bytes memory hash_PI, bytes memory hash_secret, address beneficiary_address) public view returns(bytes memory) {
        // get P_Hash
        // bytes memory P_Hash = abi.encodePacked(sha256(concat(hash_PI, hash_secret)));
        return person_hash[beneficiary_address];
    }

    function validate(bytes memory hash_PI, bytes memory hash_secret, address beneficiary_address) public view returns(bool) {
        // get P_Hash
        bytes memory P_Hash = abi.encodePacked(sha256(concat(hash_PI, hash_secret)));
        bytes memory to_compare = person_hash[beneficiary_address];
        return keccak256(P_Hash) == keccak256(to_compare);
    }

    function validate3(bytes memory hash_PI, bytes memory hash_secret, address beneficiary_address) public pure returns(bytes memory) {
        // get P_Hash
        bytes memory P_Hash = abi.encodePacked(sha256(concat(hash_PI, hash_secret)));
        return P_Hash;
    }

    
    function getName() public view returns(string memory) {
        string memory str = persons[msg.sender].name;
        return str;
    }

    function getUser() public view returns(uint, string memory, uint16, bool) {
        return (persons[msg.sender].aadhaar, persons[msg.sender].name, persons[msg.sender].age, persons[msg.sender].complicacy);
    }
    
    function doesExist(address pat, uint _aadhaar) public view returns(bool) {
        Person memory p = persons[pat];
        if(p.aadhaar == _aadhaar){
            return true;
        }
        else return false;
    }

    function addRole(address user_address, uint role) public {
        // require(msg.sender == ADMIN_ADDRESS, "USER IS NOT ADMIN");
        roles[user_address] = role;
    }
    
    function getRegisteredCount() public view returns(uint) {
        return registrationCount;
    }
    
}

