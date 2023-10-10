import React, { useState, useEffect } from "react";

const Clock = () => {
    const [info, setInfo] = useState([])
    const dateTime = info.datetime;
    const timeZone = info.timezone;
    const URL = "http://worldtimeapi.org/api/timezone"

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            const data = await result.json()
            console.log(data);
            setInfo(data);
        }
        fetchData();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData);
        console.log(payload.userInput); 
        const resultTwo = fetch(`${URL}/${payload.userInput}`)
        console.log(resultTwo);
        const dataTwo = resultTwo.json()
        // console.log(dataTwo);
    // resultTwo();    
    }
    

    
    return (
        <div>
            <h1>hi</h1>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Enter Location: 
                        <input name ="userInput" defaultValue="hi"></input>
                        <button type="submit">Submit</button>
                    </label>

                </form>
            
            
            <p>Chosen Timezone is: {timeZone && timeZone}</p>
            <p>time is: {dateTime && dateTime.slice(11,19)}</p>
            <p>date is: {dateTime && dateTime.slice(0,10)}</p>
        </div>
    );
}

export default Clock;