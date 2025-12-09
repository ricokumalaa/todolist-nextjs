'use client'

import { useState } from "react";

interface LoginProps {
  title: string;
  showLogo?: boolean; // optional
}

export default function Login ({title, showLogo}: LoginProps) {
    
    const setTrue = () => {
        setUsername(true);
        console.log("INI JADI TRUE");
    }

    const setFalse = () => {
        setUsername(false);
        console.log("INI JADI FALSE");
    }

    const [username, setUsername] = useState<boolean>(false);

    return (
        <>
            <h5>TESTING</h5> 
            <br />
            {username ? <button onClick={setFalse}> FALSE </button> : <button onClick={setTrue}> TRUE </button>}
            
        </>
    );
}