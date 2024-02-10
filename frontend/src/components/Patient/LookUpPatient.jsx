import React from "react";
import { useState } from "react";
import ethers from "ethers";
import "./LookUpPatient.css";

//0xd62e0B6CfF6aD13f09F7Afe9123e3F30c0976B79

const LookUpPatient =({state})=>{
    const [name,setName]=useState("");
    const [gender,setGender]=useState("");
    const [dateofBirth,setDateofBirth]=useState("");
    const [bloodGroup,setBloodGroup]=useState("");
    const [allergy,setAllergy]=useState("");

    const getPatient = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const _PatientId = document.querySelector("#_PatientId").value;
    
        try {
            const LookPatient = await contract.getMedicalInfoPatient(_PatientId);
            setName(LookPatient[0]);
            setGender(LookPatient[1]);
            setDateofBirth(LookPatient[2]);
            setBloodGroup(LookPatient[3]);
            setAllergy(LookPatient[4]);
        } catch (error) {
            alert("You cannot access records, You can only access your own records or, You have to be a doctor")
            
            setName("");
            setGender("");
            setDateofBirth("");
            setBloodGroup("");
            setAllergy("");
        }
    }
    

    return(
        <div>
            <form onSubmit={getPatient}>
               <label>Look Up Patient :</label>
               <input className="Lookup" type="text" id="_PatientId" placeholder="Enter Patient's Roll Number"></input>
               <button type="submit">Submit</button>
            </form>
            <div className="content">
            <span>Name: </span>{name}<br/>
            <span>Gender: </span>{gender}<br/>
            <span>Date of Birth: </span>{dateofBirth}<br/>
            <span>Blood Group: </span>{bloodGroup}<br/>
            <span> Allergies: </span>{allergy}
            </div>
        </div>
    )
};

export default LookUpPatient;