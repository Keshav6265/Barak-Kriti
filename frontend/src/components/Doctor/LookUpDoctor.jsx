import React from "react";
import { useState } from "react";
import ethers from "ethers";
import "./LookUpDoctor.css";

//0xd62e0B6CfF6aD13f09F7Afe9123e3F30c0976B79

const LookUpDoctor =({state})=>{
    const [name,setName]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [hospital,setHospital]=useState("");
    
    const getDoctor=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        try{
        const _doctorId=document.querySelector("#_doctorId").value;
        const LookDoctor= await contract.getMedicalInfoDoctor(_doctorId);

         setName(LookDoctor[0]);
         setSpeciality(LookDoctor[1]);
         setHospital(LookDoctor[2]);
        }
        catch(error){
            alert("You are not a authiorized Person to see this document");
        }
    }

    return(
        <div>
            <form onSubmit={getDoctor}>
               <label>Doctor ID</label>
               <input type="text" id="_doctorId" placeholder="Enter Doctor's ID"></input>
               <button type="submit">Submit</button>
            </form>

            <div className="content">
            <span>Doctor's Name: </span>{name}<br />
            <span>Doctor's Speciality: </span>{speciality}<br />
            <span>Hosiptal's name: </span>{hospital}<br />
            </div>
        </div>
    )
};

export default LookUpDoctor;