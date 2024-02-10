import React from "react";
import ethers from "ethers";
import "./Admin.css";

const Admin =({state})=>{
    const athurizeDoctor=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        try{
        const docAddress=document.querySelector("#docAddress").value;
        const RegisterDoc= await contract.addAuthorisedDoctor(docAddress);
        await RegisterDoc.wait(); //0xd62e0B6CfF6aD13f09F7Afe9123e3F30c0976B79
        alert("You have registered successfully");
        }
        catch(error){
            alert("You are not authiorized Person to edit this record")
        }
    }

    const UnathurizeDoctor=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const docAddress=document.querySelector("#docAddress").value;
        try{
        const DeRegisterDoc= await contract.removeAuthorisedDoctor(docAddress);
        await DeRegisterDoc.wait(); //0xd62e0B6CfF6aD13f09F7Afe9123e3F30c0976B79
        alert("You have deregistered successfully");
        }
        catch(error){
            alert("You are not authiorized Person to edit this record");
        }
    }
    return(
        <div className="Admin">
            <form onSubmit={athurizeDoctor}>
               <label>Doctor Athorization: </label>
               <input type="text" id="docAddress" placeholder="Enter DocAddress"></input>
               <button type="submit">Register</button><br/>
               <button onClick={UnathurizeDoctor}>De Register</button>
            </form>
        </div>
    )
};

export default Admin;