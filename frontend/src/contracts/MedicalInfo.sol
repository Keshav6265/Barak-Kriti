// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

import "./Patients.sol";
import "./Doctors.sol";
import "./AccessControl.sol";
import "./Records.sol";

contract MedicalInfo is AccessControl{

    Patients patient_;
    Doctors doctor_;
    Records record_;

    constructor(
        Patients _patientsContractAddress,
        Doctors _doctorsContractAddress,
        Records _recordsContractAddress
    ) {
        patient_ = Patients(_patientsContractAddress);
        doctor_ = Doctors(_doctorsContractAddress);
        record_ = Records(_recordsContractAddress);
        // medical_Record[]=record_.medical_Record[];
    }

    function addMedicalInfoPatient(
        string memory _patientName,
        uint _patientId,
        string memory _patientBloodGroup,
        // string memory _patientRollNumber,
        string memory _patientGender,
        string memory _patientDateOfBirth,
        string memory _allergiesKnown,
        address _patientWalletAddress
    ) public onlyDoctor {
        patient_.registerPatient(_patientId);
        patient_.addPatientName(_patientId, _patientName);
        patient_.addPatientBloodGroup(_patientId, _patientBloodGroup);
        patient_.addPatientGender(_patientId, _patientGender);
        patient_.addPatientDateOfBirth(_patientId, _patientDateOfBirth);
        patient_.addPatientAllergies(_patientId, _allergiesKnown);

        authPatient[_patientId] = _patientWalletAddress;
    }

    function addMedicalInfoDoctor(
        string memory _doctorName,
        string memory _doctorId,
        string memory _doctorSpeciality,
        string memory _doctorHospital
    ) public onlyDoctor {
        doctor_.addDocName(_doctorId, _doctorName);
        doctor_.addDocSpeciality(_doctorId, _doctorSpeciality);
        doctor_.addDocHospital(_doctorId, _doctorHospital);
    }

    function addMedicalRecords(
        uint _patientId,
        string memory _lastUpdated,
        string memory _currentMedicalDosage,
        string memory _updatedBy,
        string memory _currentDiagnosis
    ) public onlyDoctor {
        record_.addLastUpdated(_patientId, _lastUpdated);
        record_.addCurrentMedicalDosage(_patientId, _currentMedicalDosage);
        record_.addUpdatedBy(_patientId, _updatedBy);
        record_.addCurrentDiagnosis(_patientId, _currentDiagnosis);
        //record_.addLastUpdated(_patientId,_lastUpdated,_currentMedicalDosage,_updatedBy,_currentDiagnosis);
    }

    function getMedicalInfoPatient(uint _patientId)
        public view patientModifier(_patientId)
        returns (
            string memory,
            string memory,
            // string memory,
            string memory,
            string memory,
            string memory
        ){
        return (
            patient_.getPatientName(_patientId),
            // patient_.getPatientRollNumber(_patientId),
            patient_.getPatientGender(_patientId),
            patient_.getPatientDateOfBirth(_patientId),
            patient_.getPatientBloodGroup(_patientId),
            patient_.getPatientAllergies(_patientId)
        );
    }

    function getMedicalInfoDoctor(string memory _doctorId)
        public view onlyDoctor
        returns (string memory, string memory, string memory)
    {
        return (
            doctor_.getDocName(_doctorId),
            doctor_.getDocSpeciality(_doctorId),
            doctor_.getDocHospital(_doctorId)
        );
    }

    
    function getMedicalRecords(uint _patientId)
      public view patientModifier(_patientId)
        returns (
              string memory,
              string memory,
              string memory,
              string memory
        ) {
        return (
            record_.getLastUpdated(_patientId),
            record_.getCurrentMedicalDosage(_patientId),
            record_.getUpdatedBy(_patientId),
            record_.getCurrentDiagnosis(_patientId)
            // record_.getReport(_patientId)
        );
    }    
}