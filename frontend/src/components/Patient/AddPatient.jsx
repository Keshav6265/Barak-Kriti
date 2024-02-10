import React from "react";
import ethers from "ethers";
import "./AddPatient.css";

const AddPatient =({state})=>{
    const addnewPatient=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const _patientName=document.querySelector("#_patientName").value;
        const _patientId=document.querySelector("#_patientId").value;
        const _patientGender=document.querySelector("#_patientGender").value;
        const _patientBloodGroup=document.querySelector("#_patientBloodGroup").value;
        const _patientDateofBirth=document.querySelector("#_patientDateofBirth").value;
        const _allergiesKnown=document.querySelector("#_allergiesKnown").value;
        const _patientWalletAddress=document.querySelector("#_patientWalletAddress").value;

        try{
        const RegisterPatient= await contract.addMedicalInfoPatient(_patientName,_patientId,_patientBloodGroup,_patientGender,_patientDateofBirth,_allergiesKnown,_patientWalletAddress);
        await RegisterPatient.wait();
        console.log("done");  //0x30dc2d7D7B3791eaee1d8B2FDf7691935B892DE4
        alert("You have registered successfully");
        }
        catch(error){
            alert("You are not authiorized Doctor")
        }
    }

    return(
        <div className="container">

            <form onSubmit={addnewPatient}>
              <div className="input-field">
               <label>Patient name: </label>
               <input type="text" id="_patientName" placeholder="Enter Patient's name"></input>
               </div>
               <br />
               <div className="input-field">
               <label>Patient Roll Number :</label>
               <input type="text" id="_patientId" placeholder="Enter Patient's Roll Number"></input>
               </div>
               <br />
               <div className="input-field">
               <label>Patient Gender :</label>
               <input type="text" id="_patientGender" placeholder="Enter Patient's Gender"></input>
               </div>
               <br />
               <div className="input-field">
               <label>Patient Blood Group :</label>
               <input type="text" id="_patientBloodGroup" placeholder="Enter patient's BloodGroup"></input>
               </div>
               <br />
               <div className="input-field">
               <label>Patient Date of Birth :</label>
               <input type="date" id="_patientDateofBirth" placeholder="Enter patient's Date of Birth"></input>
               </div>
               <br />
               <div className="input-field">
               <label>Patient Allergies Known :</label>
               <textarea type="text" id="_allergiesKnown" placeholder="Enter patient's allergies"></textarea>
               </div>
               
               <div className="input-field">
               <label>Patient Wallet Address :</label>
               <input className="address" type="text" id="_patientWalletAddress" placeholder="Enter patient's wallet adddress"></input>
               </div>
               
               <button type="submit">Register</button>
            </form>
        </div>
    )
};

export default AddPatient