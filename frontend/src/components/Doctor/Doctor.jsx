import React from "react";
import AddDoctor from "./AddDoctor";
import LookUpDoctor from "./LookUpDoctor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Doctor({state}){
    const Nstate=state;
    const navigate=useNavigate();
    const [LookupD,setLookupD]=useState(false);
    const [AddD,setAddD]=useState(false);

    const handleClickForLookupD=()=>{
        setLookupD(true);
        setAddD(false);
    }

    const handleClickForAddD=()=>{
        setAddD(true);
        setLookupD(false);
    }
    return(
        <div>
            <button onClick={handleClickForLookupD}>Lookup Doctor</button>
            <button onClick={handleClickForAddD}>Add Doctor</button>
            {AddD && <AddDoctor state={Nstate} />}
            {LookupD  && <LookUpDoctor state={Nstate}/>}
        </div>
    )
}

export default Doctor;