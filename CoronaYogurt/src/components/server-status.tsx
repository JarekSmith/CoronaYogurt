import { useEffect, useState } from 'react';

export default function ServerStatus({type, address}: {type: String, address: String}) {
    const indicator = (color: string) => {
        return (
            <svg width="25" height="25">
                <circle cx="50%" cy="50%" r="50%" fill={color}/>
            </svg>
        )
    }
    const [icon, setIcon] = useState(indicator("red"));
    
    useEffect(() => {
        (async () => {
            let response = await fetch(`https://api.mcstatus.io/v2/status/java/${address}`);
            if (!response.ok) throw new Error(`Status: ${response.status}`);
            let result = await response.json();
            if (result.online) setIcon(indicator("green"));
            else setIcon(indicator("red")); 
        })()
    }, [setIcon, address]);

    return ( 
        <>
            <div>{type} Server: {address} {icon}</div>
        </>
    )
}