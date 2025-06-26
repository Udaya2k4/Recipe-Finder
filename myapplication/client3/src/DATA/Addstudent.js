import React, {useState} from "react";

function Addstudent(){
    const [uname,setName]=useState("");
const[eid,setId]=useState("");
const[email,setEmail]=useState("");
const[contact,setcontact]=useState("");
const[address,setaddress]=useState("");
const[qualif,setqualif]=useState("");
const[photo,setphoto]=useState("");
const[rank,setrank]=useState("");
    return(
        <div>
            <center>
             <table border="1" rules="all">
                <tr>
            <th>Username</th>
            <th>EmployeeId</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Photo</th>
            <th>rank</th>
            </tr>
            <tr>
           <td>{uname}</td>
            <td>{eid}</td>
          
           <td>{email}</td>
           <td> {contact}</td>
           <td> {address}</td>
           <td><img src={photo?URL.createObjectURL(photo):""} width="100px"></img></td>
           <td> {rank}</td>
            </tr>
           </table><br></br>
      <br></br>
            <form>
                <table border="1" rules="all">
              <tr><td>Student Name: <input type="text" name="name" onChange={(event)=>{setName(event.target.value)}}></input></td></tr>
             <tr><td> Student Id: <input type="text" name="eid" onChange={(event)=>{setId(event.target.value)}}></input></td></tr>
               <tr><td> Email: <input type="email" name="eemail" onChange={(event)=>{setEmail(event.target.value)}} ></input></td></tr>
                <tr><td> contact: <input type="tel" name="econtact" onChange={(event)=>{setcontact(event.target.value)}}></input></td></tr>
                <tr><td> EAMCET Rank:<input type="number" name="num" onChange={(event)=>{setrank(event.target.value)}}></input> </td></tr>
                 Gender:<br></br>
                 <input type="radio" name="gender"></input>Male
                 <input type="radio" name="gender"></input>Female<br></br>
                 
                <tr><td> Address:<input type="text" name="addr" onChange={(event)=>{setaddress(event.target.value)}}></input></td></tr>
                <tr><td> Photo Upload:<input type="file" name="photo" onChange={(e)=>{setphoto(e.target.files[0])}}></input></td></tr>
                <input type="submit" name="submit"value="Save Record"></input>
                <input type="reset" name="reset" value="reset"></input><br></br>
                </table>
            </form>
              </center>
        </div>
    )
}
export default Addstudent;