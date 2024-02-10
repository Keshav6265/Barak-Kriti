// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

contract Patients{
     struct patientsInfo {
        string patientName;
        string patientBloodGroup;
        uint patientRollNumber;
        string patientGender;
        string patientDateOfBirth;
        string allergiesKnown;
        string patientEmail;
    }

    mapping(uint => patientsInfo) patientIdInfo;
    
    function registerPatient(uint _patientId) public {
        require(patientIdInfo[_patientId].patientRollNumber==0,"already registered");
        patientIdInfo[_patientId].patientRollNumber=_patientId;
    }

    function addPatientName(uint _patientId,string memory _name) public {
        patientIdInfo[_patientId].patientName = _name;
    }

    function getPatientName(uint _patientId) public view 
       returns (string memory) {
        return patientIdInfo[_patientId].patientName;
    }

    function addPatientBloodGroup(uint _patientId,string memory _bloodGroup) public {
        patientIdInfo[_patientId].patientBloodGroup = _bloodGroup;
    }

    function getPatientBloodGroup(uint _patientId
    ) public view returns (string memory) {
        return patientIdInfo[_patientId].patientBloodGroup;
    }

    // function addPatientRollNumber(
    //     string memory _patientId,
    //     string memory _patientRollNumber
    // ) public {
    //     patientIdInfo[_patientId].patientRollNumber = _patientRollNumber;
    // }

    // function getPatientRollNumber(
    //     string memory _patientId
    // ) public view returns (string memory) {
    //     return patientIdInfo[_patientId].patientRollNumber;
    // }

    function addPatientEmail(
        uint _patientId,
        string memory _patientEmail
    ) public {
        patientIdInfo[_patientId].patientEmail = _patientEmail;
    }

    function getPatientEmail(uint _patientId) public view returns (string memory) {
        return patientIdInfo[_patientId].patientEmail;
    }

    function addPatientGender(uint _patientId,string memory _patientGender) public {
        patientIdInfo[_patientId].patientGender = _patientGender;
    }

    function getPatientGender(uint _patientId) public view returns (string memory) {
        return patientIdInfo[_patientId].patientGender;
    }

    function addPatientDateOfBirth(
        uint _patientId,
        string memory _patientDateOfBirth
    ) public {
        patientIdInfo[_patientId]
            .patientDateOfBirth = _patientDateOfBirth;
    }

    function getPatientDateOfBirth(uint _patientId) 
      public view returns (string memory) {
        return patientIdInfo[_patientId].patientDateOfBirth;
    }

    function addPatientAllergies(
        uint _patientId,
        string memory _allergy
    ) public {

         patientIdInfo[_patientId].allergiesKnown = _allergy;        
    }

    function getPatientAllergies(uint _patientId) public view returns (string memory) {
        return patientIdInfo[_patientId].allergiesKnown;
    }

}