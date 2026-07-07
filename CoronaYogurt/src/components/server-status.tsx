import { Component } from 'react';

class ServerStatus extends Component {
    render(type: string, address: string) {
        const indicator = (color: string) => {
            return (
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="50" fill={color}/>
            </svg>
            )
        }
        let response = fetch(`https://api.mcstatus.io/v2/status/java/${address}`);
        if (!response.ok) throw new Error(`Response: ${response.status}`);
        let result =  response.json();
        const icon = result.online ? indicator("green") : indicator("red");

        return ( 
            <>
                <div>{type} Server: {address} {icon}</div>
            </>
        )
    }
}

export default ServerStatus;