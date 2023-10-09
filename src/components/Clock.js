import React, { useState, useEffect } from "react";

const Clock = () => {
    const [data, setData] = useState([])
    const datetime = data.datetime;

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
            <p>time is: {datetime && datetime.slice(11,19)}</p>
            <p>date is: {datetime && datetime.slice(0,10)}</p>
        </div>
    );
}

export default Clock;