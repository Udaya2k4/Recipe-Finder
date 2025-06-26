
import React from "react";
function Login(){
    return(
        <div>
            <form>
              
                Email: <input type="email" name="email"></input><br></br>
                 Password: <input type="password" name="pw"></input><br></br>
                 <input type="submit" name="submit"value="Submit"></input>
            </form>
        </div>
    )
}
export default Login;