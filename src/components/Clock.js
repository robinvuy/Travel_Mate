import React, { useState, useEffect } from "react";

const Clock = () => {
    const [data, setData] = useState([])
    const dateTime = data.datetime;
    const timeZone = data.timezone;

    useEffect(() => {
        fetch('http://worldtimeapi.org/api/timezone/Europe/London')
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
    }, []);
          
    
    return (
        <div>
            <h1>hi</h1>
            <label>
                Enter Location: 
                <input name ="userInput" defaultValue="hi"></input>
            </label>
            
            <p>Chosen Timezone is: {timeZone && timeZone}</p>
            <p>time is: {dateTime && dateTime.slice(11,19)}</p>
            <p>date is: {dateTime && dateTime.slice(0,10)}</p>
        </div>
    );
}

export default Clock;