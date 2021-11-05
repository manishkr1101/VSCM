// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Feedback {
    VaccineRegistry vr;
    mapping(string => mapping(address => string)) feeds;
    
    
    constructor(address _vr) public {
        vr = VaccineRegistry(_vr);
    }
    
    
    function postFeedback(string memory _vaccineLotId, string memory feedback) public {
        // require(vaccinated[msg.sender], "Not Vaccinated");
        require(vr.isVaccinated(msg.sender), "Not Vaccinated");
        feeds[_vaccineLotId][msg.sender] = feedback;
    }
    
    function getFeedback(string memory _vaccineLotId, address _patient) public view returns(string memory) {
        return feeds[_vaccineLotId][_patient];
    }
    
}

contract VaccineRegistry {
    function isVaccinated(address) public view returns(bool);
}
