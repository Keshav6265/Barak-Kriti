import React from "react";
import { useState } from "react";
import ethers from "ethers";

//0xd62e0B6CfF6aD13f09F7Afe9123e3F30c0976B79

const LookUpReport =({state})=>{
    const [lastUpdated,setLastUpdated]=useState("");
    const [currentMedicalDosage,setCurrentMedicalDosage]=useState("");
    const [updatedBy,setUpdatedBy]=useState("");
    const [currentDiagnosis,setCurrentDiagnosis]=useState("");
    const [name,setName]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [hospital,setHospital]=useState("");
    

    const getReport=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const _patientId=document.querySelector("#_patientId").value;

        try{
        const LookDoctor= await contract.getMedicalRecords(_patientId);

         setLastUpdated(LookDoctor[0]);
         setCurrentMedicalDosage(LookDoctor[1]);
         setUpdatedBy(LookDoctor[2]);
         setCurrentDiagnosis(LookDoctor[3]);

         const LookUpdate=await contract.getMedicalInfoDoctor(LookDoctor[2]);
         setName(LookUpdate[0]);
         setSpeciality(LookUpdate[1]);
         setHospital(LookUpdate[2]);
        }
        catch(error){
            alert("You cannot access records, You can only access your own records or, You have to be a doctor. ");  
          }
    }

    return(
        <div>
            <form onSubmit={getReport}>
               <label>Patient ID</label>
               <input type="text" id="_patientId" placeholder="Enter Patient's ID"></input>
               <button type="submit">Register</button>
            </form>
            <div className="content">
            <span>Last Updated on: </span>{lastUpdated}<br/>
            <span>Diagnosis: </span>{currentDiagnosis}<br/>
            <span>Medical Dosage: </span>{currentMedicalDosage}<br/> 
            </div>

            <h3>Last updated By:<br /></h3>

            <div className="content2">
            <span>Doctor's Name: </span>{name}<br />
            <span>Doctor's Speciality: </span>{speciality}<br />
            <span>Hosiptal's name: </span>{hospital}<br />
            </div>
        </div>
    )
};

export default LookUpReport;