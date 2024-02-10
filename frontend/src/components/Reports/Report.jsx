import React from "react";
import AddReport from "./AddReports";
import LookUpReport from "./LookUpReport";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Report({state}){
    const Nstate=state;
    const navigate=useNavigate();
    const [LookupR,setLookupR]=useState(false);
    const [AddR,setAddR]=useState(false);

    const handleClickForLookupR=()=>{
        setLookupR(true);
        setAddR(false);
    }

    const handleClickForAddR=()=>{
        setAddR(true);
        setLookupR(false);
    }
    return(
        <div>
            <button onClick={handleClickForAddR}>Add Report</button>
            <button onClick={handleClickForLookupR}>Lookup Report</button>
             {AddR && <AddReport state={Nstate}/>}
            {LookupR  && <LookUpReport state={Nstate}/>}
        </div>
    )
}

export default Report;