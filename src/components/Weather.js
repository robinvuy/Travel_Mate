import React, { useEffect, useState} from "react";

const Weather = () => {
    const [info, setInfo] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [submit, setSubmit] = useState(false);
    //const rain = info.current.temp_c;
    
    const URL = " http://api.weatherapi.com/v1";
    const key = "dbff83e38c3c42efb1e103239241505"
    
    useEffect(() => {
        const fetchData = async () => {
            if (submit) {
                const result = await fetch(`${URL}/current.json?key=${key}&q=${inputValue}`)
                console.log(result)
                const data = await result.json()
                console.log(data);
                setInfo(data);
                setSubmit(false);
            }
        }
            fetchData();
    }, [submit, inputValue]);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true)
        console.log(inputValue)
    }
        

    


    return (
        <div>
            <h1>hello, weather awaits you</h1>
            <form onSubmit= {handleSubmit}>
                <label> 
                    Enter Location:
                    <input
                        type = "text"
                        required
                        value = {inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </label>
            </form>

        {info && info.current ? 
        <>
        <p>Displaying weather for  {inputValue} </p>
        <p>Temparature is {info.current.temp_c} °C </p> 
        <p>Temparature feels like {info.current.feelslike_c} °C </p>
        <p>Precipitation is {info.current.precip_mm} mm</p>
        </>: null
    }  
        
        
        
        
        </div>

        
    );
}


export default Weather;