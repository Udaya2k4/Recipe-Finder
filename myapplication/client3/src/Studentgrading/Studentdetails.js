import React from "react";
class Details extends React.Component{
    render(){
        return(
            <div>
                <center><table > 
                    <tr>
               <th>STUDENT NAME :{this.props.name}</th> 
                <th>ROLLNO :{this.props.rollno}</th>
                </tr>
                </table>
                </center>
            </div>
        )
    }
}
function Studentdetails(){
    return(
        <div>
            <Details name="Udaya" rollno="B23CN078" />
        </div>
    )
}
export default Studentdetails;
