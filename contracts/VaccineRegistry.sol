// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract VaccineRegistry {
    Beneficiary ben;
    
    uint vaccinatedCount=0;
    mapping(address => bool) vaccinated;
    
    mapping(string => int256) vaccineLots;
    mapping(string => int) vaccineTemp; // thresold temperature
    struct MonitoredData {
        int16 temp;
        uint256 timestamp;
    }
    mapping (string => MonitoredData[]) monitoredData;
    uint256 availableVaccines = 0;
    
    mapping(uint => mapping(string => address)) administratedVaccines;
    
    constructor(address _ben) public {
        ben = Beneficiary(_ben);
    }
    
    // returns number of extra required vaccines according to registered users
    function getRequiredCount() public view returns(int) {
        return int(ben.getRegisteredCount()) - int(vaccinatedCount + availableVaccines);
    }
    
    function registerVaccineLot(string memory _vaccineLotId, int256 _quantity, int thresoldTemp) public {
        require(vaccineLots[_vaccineLotId] == 0);
        require(_quantity>0);
        vaccineLots[_vaccineLotId] = _quantity;
        vaccineTemp[_vaccineLotId] = thresoldTemp;
        availableVaccines += uint256(_quantity);
    }
    
    // called by iot devices
    function monitor(string memory _vaccineLotId, int16 temperature) public {
        require(vaccineLots[_vaccineLotId] > 0, "No such vaccine exist");

        monitoredData[_vaccineLotId].push(MonitoredData(temperature, block.timestamp));
    }

    function getMonitoredData(string memory _vaccineLotId) public view returns(MonitoredData[] memory) {
        return monitoredData[_vaccineLotId];
    }

    function checkLegitmacy(string memory _vaccineLotId) public view returns(bool) {
        require(vaccineLots[_vaccineLotId] > 0, "No such vaccine exist");
        
        int16 thresoldTemp = int16(vaccineTemp[_vaccineLotId]);
        MonitoredData[] memory data = monitoredData[_vaccineLotId];

        for(uint i=0; i<data.length; i++) {
            if(data[i].temp > thresoldTemp) {
                return false;
            }
        }

        return true;
    }
    
    function vaccinate(uint _aadhaar, address patient_address, address doctor_address, string memory _vaccineLotId) public {
        // require(ben.doesExist(patient_address, _aadhaar), "User not registered");
        require(vaccinated[patient_address]==false, "Already vaccinated");
        require(vaccineLots[_vaccineLotId] > 0, "No such vaccine exist");
        
        vaccinated[patient_address] = true;
        
        administratedVaccines[_aadhaar]['doctor'] = doctor_address;
        administratedVaccines[_aadhaar]['patient'] = patient_address;
        administratedVaccines[_aadhaar]['auth'] = msg.sender;
        
        vaccineLots[_vaccineLotId] = vaccineLots[_vaccineLotId] - 1;
        if(vaccineLots[_vaccineLotId] == 0) {
            vaccineLots[_vaccineLotId] = -1; // indicating there was once but now exhausted
        }
        vaccinatedCount++;
        availableVaccines--;
    }
    
    function isVaccinated(address _patient) public view returns(bool) {
        return vaccinated[_patient];   
    }
    
    
}

contract Beneficiary {
    function getRegisteredCount() public view returns(uint);
}
