
import React, {useState} from "react";
function AddFaculty(){
const [uname,setName]=useState("");
const[eid,setId]=useState("");
const[email,setEmail]=useState("");
const[contact,setcontact]=useState("");
const[address,setaddress]=useState("");

const[qualification,setQualification]=useState({ssc:false,inter:false,btech:false,mtech:false,phd:false})
const[photo,setphoto]=useState("");
const [result,setResult]=useState();
           function via(event){
            const {value,checked}=event.target;
            const updateditem = {...qualification, [value]:checked};
            setQualification(updateditem);
            let result="";
            if(updateditem.ssc) result+="ssc";
             if(updateditem.inter) result+="inter";
              if(updateditem.btech) result+="btech";
               if(updateditem.mtech) result+="mtech";
                if(updateditem.phd) result+="phd";
                setResult(result.trim());
           }
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
            <th>Qualification</th>
            </tr>
            <tr>
           <td>{uname}</td>
            <td>{eid}</td>
          
           <td>{email}</td>
           <td> {contact}</td>
           <td> {address}</td>
           <td><img src={photo?URL.createObjectURL(photo):""} width="100px"></img></td>
           <td>{result}</td>
            </tr>
           </table>
           
          
            <h3>Add Faculty Details</h3>
            <form>
                <table>
              <tr><td>Employee Name: <input type="text" name="uname" onChange={(event)=>{setName(event.target.value)}}></input></td></tr>
              <tr><td>Employee Id: <input type="text" name="eid" onChange={(event)=>{setId(event.target.value)}}></input></td></tr>
                <tr><td>Email: <input type="email" name="eemail" onChange={(event)=>{setEmail(event.target.value)}}></input></td></tr>
                 <tr><td>Econtact: <input type="tel" name="econtact" onChange={(event)=>{setcontact(event.target.value)}}></input></td></tr>
                 <tr><td>Employee Qualification:</td></tr>
    
                 <input type="checkbox" name="qualification" checked={qualification.ssc} onchange={via}></input>SSC<br></br>
                 <input type="checkbox" name="qualification" checked={qualification.inter} onchange={via}></input>Inter<br></br>
                
                 <input type="checkbox" name="qualification" checked={qualification.btech} onchange={via}></input>Btech<br></br>
                 <input type="checkbox" name="qualification" checked={qualification.mtech} onchange={via}></input>Mtech<br></br>
                 <input type="checkbox" name="qualification" checked={qualification.phd} onchange={via}></input>Phd<br></br>
                
                 Gender:<br></br>
                 <tr><td><input type="radio" name="gender"></input>Male</td></tr>
                <tr><td> <input type="radio" name="gender"></input>Female</td></tr>
                
                 <tr><td>Address:<input type="text" name="addr" onChange={(event)=>{setaddress(event.target.value)}}></input></td></tr>
                 <tr><td>Photo Upload:<input type="file" name="photo" onChange={(e)=>{setphoto(e.target.files[0])}}></input></td></tr>
                <tr><td><input type="submit" name="submit"value="Save Record"></input></td></tr>
                <tr><td><input type="reset" name="reset" value="reset"></input></td></tr>
                </table>
            </form>
            </center>
            
        </div>
    )
}
export default AddFaculty;