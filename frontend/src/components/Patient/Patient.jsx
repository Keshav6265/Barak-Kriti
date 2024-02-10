import React from "react";
import AddPatient from "./AddPatient";
import LookUpPatient from "./LookUpPatient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.css";

function Patient({state}){
    const Nstate=state;
    const navigate=useNavigate();
    const [LookupP,setLookupP]=useState(false);
    const [AddP,setAddP]=useState(false);

    const handleClickForLookup=()=>{
        setLookupP(true);
        setAddP(false);
    }
    const handleClickForAddPatient=()=>{
        setAddP(true);
        setLookupP(false);
    }
    return(
        <>
        <div className="random">
            {<button onClick={handleClickForAddPatient}>Add Patient</button>}
            <button onClick={handleClickForLookup}>Lookup Patient</button>
            {AddP && <AddPatient state={Nstate} />}
            {LookupP  && <LookUpPatient state={Nstate}/>}
        </div>
        </>
    )
}

export default Patient;