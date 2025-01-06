import React, { useState, useEffect } from "react";

const Clock = () => {
    const [info, setInfo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [submit, setSubmit] = useState(false);
    const dateTime = info.datetime;
    const timeZone = info.timezone;
    const utc = info.abbreviation;
    const URL = "https://worldtimeapi.org/api/timezone";

    useEffect(() => {
        const fetchData = async () => {
            if (submit) {
                const result = await fetch(`${URL}/${inputValue}`)
                console.log(result)
                const data = await result.json()
                console.log(data);
                setInfo(data);
                setSubmit(false);
            }
        }
            fetchData();
    }, [submit, inputValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        console.log(inputValue);
    }
    
    return (
        <div>
            <h1>hi</h1>
                <form onSubmit= {handleSubmit}> 
                    <label>
                        Enter Location: 
                        <input 
                            type ="text" 
                            required
                            value = {inputValue} 
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </label>

                </form>
            
            
            <p>Chosen Timezone is: {timeZone && timeZone} {utc && utc }</p>
            <p>time is: {dateTime && dateTime.slice(11,19)}</p>
            <p>date is: {dateTime && dateTime.slice(0,10)}</p>
        </div>
    );
};

export default Clock;
