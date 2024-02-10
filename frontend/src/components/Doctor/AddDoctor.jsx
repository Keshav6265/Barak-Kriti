import React from "react";
import ethers from "ethers";


const AddDoctor =({state})=>{
    const addnewDoctor=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const _doctorName=document.querySelector("#_doctorName").value;
        const _doctorId=document.querySelector("#_doctorId").value;
        const _doctorSpeciality=document.querySelector("#_doctorSpeciality").value;
        const _doctorHospital=document.querySelector("#_doctorHospital").value;

        try{
        const RegisterPatient= await contract.addMedicalInfoDoctor(_doctorName,_doctorId,_doctorSpeciality,_doctorHospital);
        await RegisterPatient.wait();
        console.log("done");  //0x30dc2d7D7B3791eaee1d8B2FDf7691935B892DE4
        alert("You have registered successfully");
        }
        catch(error){
            alert("You are not a authiorized Person to edit this document");
        }
    }

    return(
        <div>
            <form onSubmit={addnewDoctor}>
               <label>Doctor name</label>
               <input type="text" id="_doctorName" placeholder="Enter Doctor's name"></input>
               <label>Doctor ID</label>
               <input type="text" id="_doctorId" placeholder="Enter Doctor's ID"></input>
               <label>Doctor's Spaciality</label>
               <input type="text" id="_doctorSpeciality" placeholder="Enter Doctor's Speciality"></input>
               <label>Doctor's Hospital</label>
               <input type="text" id="_doctorHospital" placeholder="Enter Doctor's Hospital"></input>
               <button type="submit">Register</button>
            </form>
        </div>
    )
};

export default AddDoctor;