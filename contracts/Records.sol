// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

contract Records{
    struct medical_Record {
        string lastUpdated;
        string currentMedicalDosage;
        string updatedBy; //doctors id
        string currentDiagnosis;
    }

     mapping(uint => medical_Record) patientRecord;

    // function addLastUpdated(
    //     string memory _patientId,
    //     string memory _date,
    //     string memory _currentMedicalDosage,
    //     string memory _updatedBy,
    //     string memory _currentDiagnosis
        
    // ) public {
    //     medical_Record memory record = medical_Record({
    //        lastUpdated: _date,
    //        currentMedicalDosage: _currentMedicalDosage,
    //        updatedBy: _updatedBy,
    //        currentDiagnosis: _currentDiagnosis
    //     });
    //     patientRecord[_patientId].push(record);
    // }
    
    // it will return array of medical_Record of particular person.
    // function getReport(string memory s) public view returns(medical_Record[] memory) {
    //     return patientRecord[s];
    // }

     function addLastUpdated(
        uint _patientId,
        string memory _date
    ) public {
        patientRecord[_patientId].lastUpdated = _date;
    }

    function getLastUpdated(
    uint _patientId
    ) public view returns (string memory) {
        return patientRecord[_patientId].lastUpdated;
    }

    function addCurrentMedicalDosage(
        uint _patientId,
        string memory _currentMedicalDosage
    ) public {
        patientRecord[_patientId].currentMedicalDosage = _currentMedicalDosage;
    }

    function getCurrentMedicalDosage(uint _patientId) public view returns (string memory) {
        return patientRecord[_patientId].currentMedicalDosage;
    }

    function addUpdatedBy(
        uint _patientId,
        string memory _updatedBy
    ) public {
        patientRecord[_patientId].updatedBy = _updatedBy;
    }

    function getUpdatedBy(
        uint _patientId
    ) public view returns (string memory) {
        return patientRecord[_patientId].updatedBy;
    }

    function addCurrentDiagnosis(
        uint _patientId,
        string memory _currentDiagnosis
    ) public {
        patientRecord[_patientId].currentDiagnosis = _currentDiagnosis;
    }

    function getCurrentDiagnosis(
       uint _patientId
    ) public view returns (string memory) {
        return patientRecord[_patientId].currentDiagnosis;
    }

}