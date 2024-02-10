//SPDX-License-Identifier: Unlicensed

pragma solidity>=0.7.0;

contract AccessControl{
    address public owner;

    mapping(address=>bool) public authDoctor;
    mapping(uint=>address) public authPatient;

    constructor() {
        owner =msg.sender;
        authDoctor[owner]=true;
    }

    modifier isOwner() {
        require(msg.sender == owner,"You will need to contact the owner");
        _;
    }

    modifier onlyDoctor() {
        require(authDoctor[msg.sender] == true,"Not a authorised doctor");
        _;
    }

     modifier isPatient(uint _patientId) {
        require(authPatient[_patientId] == msg.sender,
            "You are not the authorised user, Please try accessing your own record"
        );
        _;
    }

      modifier patientModifier(uint _patientId) {
        require(
            authDoctor[msg.sender] == true ||
                authPatient[_patientId] == msg.sender,
            "You cannot access records, You can only access your own records or, You have to be a doctor."
        );
        _;
    }

    function addAuthorisedDoctor(address _doctorAddress) public onlyDoctor {
        authDoctor[_doctorAddress] = true;
    }

    function removeAuthorisedDoctor(address _doctorAddress) public isOwner {
        authDoctor[_doctorAddress] = false;
    }

}