
import React from "react";
function Clg(){
    return(
        <div>
            Courses offered:<br></br>
            <ol>
                <li>CSE</li>
                <li>CIVIL</li>
                <li>ECE</li>
                <li>ECI</li>
                <li>EEE</li>
                <li>MECH</li>
                <li>CSN</li>
                </ol>
                Student intake:<br></br>
                <input type="checkbox" name="t"></input>CSE
                <input type="checkbox" name="t"></input>CIVIL
                <input type="checkbox" name="t"></input>ECE
                <input type="checkbox" name="t"></input>ECI
                <input type="checkbox" name="t"></input>EEE
                <input type="checkbox" name="t"></input>MECH
                <input type="checkbox" name="t"></input>CSN<br></br>
                <input type="submit" value="submit"></input>


        </div>
    )
}
export default Clg;