import React, { useState, useEffect } from "react";

const Clock = () => {
    const [info, setInfo] = useState([])
    const dateTime = info.datetime;
    const timeZone = info.timezone;
    const URL = "http://worldtimeapi.org/api/timezone/Europe/London"

    // useEffect(() => {
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then((json) => {
    //             console.log(json);
    //             setInfo(json);
    //         })
    // }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            const data = await result.json()
            console.log(data);
            setInfo(data);
        }
        fetchData();
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