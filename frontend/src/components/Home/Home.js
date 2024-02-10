import React from "react";
import {ethers} from 'ethers';
import { useState,useEffect } from "react";
import { Route,Routes } from "react-router-dom";
import ABI from '../../artifacts/contracts/MedicalInfo.sol/MedicalInfo.json';
import Patient from "../Patient/Patient";
import Doctor from "../Doctor/Doctor";
import Report from "../Reports/Report";
import Admin from "../Admin/Admin";
import Navbar from "../Navbar/Navbar";

function Home(){
    const [state,setState]=useState({
        provider: null,
        signer: null,
        contract: null
    })


    useEffect(()=>{
        const connectWallet=async ()=>{
        const contractAddress="0xeF80F0c9BFfCddfff97e07DD8fE4fCedf0dD22A6";
        const contractAbi=ABI.abi;
        try{
            const {ethereum}=window;
            if(ethereum){
                const accounts=await ethereum.request({method:"eth_requestAccounts","params": []});
            }
            const provider=new ethers.BrowserProvider(ethereum);
            const signer= await provider.getSigner();
            const contract=new ethers.Contract(contractAddress,contractAbi,signer);
            setState({provider,signer,contract});
        }catch(error){
            console.log(error);
        }
        };
        connectWallet();       
    },[]);
        
    return (
        <div>
        <Navbar />
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Patient" element={<Patient state={state} />} />
            <Route path="/Doctor" element={<Doctor state={state} />} />
            <Route path="/Report" element={<Report state={state}/>} />
            <Route path="/Admin" element={<Admin state={state}/>} />
        </Routes>
        </div>
    )
}

//MedicalInfo contract deployed to: 0xeF80F0c9BFfCddfff97e07DD8fE4fCedf0dD22A6
export default Home;