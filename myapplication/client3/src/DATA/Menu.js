
import React from "react";
import { Routes,Route,BrowserRouter, Link } from "react-router-dom";
import AddFaculty from "./AddFaculty";
import Addstudent from "./Addstudent";
import DeleteStudent from "./DeleteStudent";
import DeleteFaculty from "./DeleteFaculty";
import Login from "./Login";
import GetStudent from "./GetStudent";
import GetFaculty from "./GetFaculty";
import Clg from "./Clg";
import Dept from "./Dept";
function Menu(){
    return(
        <BrowserRouter>
        <div className="menu">
            <div>Home</div>
            
            <div className="faculty1">Faculty
                 <div className="faculty2">
                <div><Link to="/AddFaculty">AddFaculty</Link></div>
                <div><Link to="/Delfaculty">DeleteFaculty</Link></div>
                <div><Link to="/Getfaculty">Get Faculty Details</Link></div>
                </div>

            </div>
            <div className="student1">Student
                <div className="student2">
                <div><Link to="/Addstudent">Add Student</Link></div>
                <div><Link to="/Delstudent">Delete Student</Link></div>
                <div><Link to="/GetStudent">Get Student Details</Link></div>
                </div>
            </div>
            <div>Contact</div>
            <div className="about1">About
                <div className="about2">
                <div><Link to="/Clg">College</Link></div>
                <div><Link to="/Dept">Department</Link></div>
            </div>
            </div>
            <div><Link to="/Login">Login</Link></div>
           
        </div>
        <Routes>
        <Route path="/AddFaculty" element={<AddFaculty />}></Route>
        <Route path="/Addstudent" element={<Addstudent />}></Route>
        <Route path="/Delstudent" element={<DeleteStudent />}></Route>
        <Route path="/Delfaculty" element={<DeleteFaculty />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/GetStudent" element={<GetStudent />}></Route>
        <Route path="/GetFaculty" element={<GetFaculty />}></Route>
         <Route path="/Clg" element={<Clg />}></Route>
         <Route path="/dept" element={<Dept />}></Route>
          
        </Routes>
        </BrowserRouter>
    )
}
export default Menu;