import React from "react";
import ethers from "ethers";


const AddReport =({state})=>{
    const addnewReport=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const _patientId=document.querySelector("#_patientId").value;
        const _doctorId=document.querySelector("#_doctorId").value; //_updatedBy
        const _currentDiagnosis=document.querySelector("#_currentDiagnosis").value;
        const _currentMedicalDosage=document.querySelector("#_currentMedicalDosage").value;
        const _lastUpdated=document.querySelector("#_lastUpdated").value;

        try{
        const RegisterRecord= await contract.addMedicalRecords(_patientId,_lastUpdated,_currentMedicalDosage,_doctorId,_currentDiagnosis);
        await RegisterRecord.wait();
        console.log("done");  //0x30dc2d7D7B3791eaee1d8B2FDf7691935B892DE4
        }
        catch(error){
            alert("You are not a authiorized Person to edit this document");
        }
    }

    return(
        <div>
            <form onSubmit={addnewReport}>
               <label>Doctor ID</label>
               <input type="text" id="_doctorId" placeholder="Enter Doctor's ID"></input>
               <label>Patient ID</label>
               <input type="text" id="_patientId" placeholder="Enter Patient's ID"></input>
               <label>Diagnosis</label>
               <textarea type="text" id="_currentDiagnosis" placeholder="Diagnosis :"></textarea>
               <label>Prescription</label>
               <textarea type="text" id="_currentMedicalDosage" placeholder="Enter Doctor's Hospital"></textarea>
               <label>Report Updated on: </label>
               <input type="date" id="_lastUpdated" placeholder="Enter Last Update Date"></input>
               <button type="submit">Register</button>
            </form>
        </div>
    )
};

export default AddReport;