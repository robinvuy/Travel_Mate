
const Location = () => {

    function locations () {
        return [ 
            ["europe/london", "London" ], 
            ["europe/paris", "Paris" ],
            ["asia/bangkok", "Bangkok"],
            ["australia/sydney", "Sydney"]

        ];
    }

    

    return (
        <select>
            {/* <option value="europe/london">London</option> */}
            {/* <option value="europe/paris">Paris</option> */}
            {/* <option value="asia/bangkok">Bangkok</option> */}
            {/* <option value="australia/sydney">Sydney</option> */}

            {locations().map(([region, city]) => {
        return <option value={region}>{city}</option>
        })}
        </select>
    );

}

export default Location;