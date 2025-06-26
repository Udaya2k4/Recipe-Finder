
import React from "react";
function Marks(args){
    return(
        <div>
            <center>
            <table border="1" width="80%" rules="all">
                <tr>
                    <th>S.No</th>
                    <th>Subject Name</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>C programming</td>
                    <td>{args.a}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Java programmig</td>
                    <td>{args.b}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Python programming</td>
                    <td>{args.c}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>React</td>
                    <td>{args.d}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Node. js</td>
                    <td>{args.e}</td>
                </tr>
            </table>
            </center>
           
        </div>
    )
}

   


export default Marks;