// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Beneficiary {
    uint registrationCount;
    mapping(address => Person) persons;
    mapping(address => bool) public registered;

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
        // ADMIN_ADDRESS = 0x095f557754761fE760Dd9b623CC5e7E70D4f342B;
    }
    
    function verifyAadhaar(uint _aadhaar) public pure returns(bool) {
        require(_aadhaar < 999999999999);
        return true;
    }
    
    function registerBeneficiary(uint _aadhaar, string memory _name, uint16 _age, bool _comp) public {
        if(block.timestamp > phase2Time) {
            require(_age >= 18);
        }
        else {
            require(_age >= 50, "Age must be greater equal than 50");
        }
        require(verifyAadhaar(_aadhaar), "Invalid Aadhaar");
        require(registered[msg.sender] == false, "Already registered");
        Person memory p = Person(_aadhaar, _name, _age, _comp);
        
        persons[msg.sender] = p;
        registered[msg.sender] = true;
        registrationCount += 1;
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

