// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

contract Doctors{
    struct doctorInfo{
        string docName;
        string docSpeciality;
        string docHospital;
    }

    mapping(string=>doctorInfo) docIdinfo;

    function addDocName(string memory _docId,string memory _name) 
    public {
        docIdinfo[_docId].docName = _name;
    }

    function getDocName(string memory _docId) 
    public view returns (string memory) {
        return docIdinfo[_docId].docName;
    }

    function addDocSpeciality(
        string memory _docId,
        string memory _speciality
    ) public {
        docIdinfo[_docId].docSpeciality = _speciality;
    }

    function getDocSpeciality(string memory _docId) 
      public view returns (string memory) {
        return docIdinfo[_docId].docSpeciality;
    }

    function addDocHospital(string memory _docId,string memory _hospital
    ) public {
        docIdinfo[_docId].docHospital = _hospital;
    }

    function getDocHospital(string memory _docId) 
      public view returns (string memory) {
        return docIdinfo[_docId].docHospital;
    }
}