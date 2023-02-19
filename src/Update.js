import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Update() {

    const navigate = useNavigate();
    let location = useLocation();

    const [id, setId] = useState(location.state.payload.id);
    const [name, setName] = useState(location.state.payload.name);
    const [branchName, setBranch] = useState(location.state.payload.branchName);
    const [emailId, setEmail] = useState(location.state.payload.emailId);
    const [cgpa, setCGPA] = useState(location.state.payload.cgpa);
    const [phoneNumber, setPhoneNumber] = useState(location.state.payload.phoneNumber);

    const UpdateStudent = () => {
        if(!name || !branchName || !emailId || !cgpa|| !phoneNumber){
            window.alert("Incomplete Details")
            return;
        }

        const payload = {}
        payload.id = id;
        payload.name = name;
        payload.branchName = branchName;
        payload.emailId = emailId;
        payload.cgpa = cgpa;
        payload.phoneNumber = phoneNumber;
        console.log(location.state.payload.id);

        axios.put(`http://localhost:8080/students/${location.state.payload.id}`, payload)
        .then(() => {
            navigate(-1);
        })
    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='ID'  onChange={(e) => setId(e.target.value)} value={location.state.payload.id}/>
            </div>
            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} defaultValue={location.state.payload.name} />
                    </div>
            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Branch' onChange={(e) => setBranch(e.target.value)} defaultValue={location.state.payload.branchName} />
                    </div>
            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} defaultValue={location.state.payload.emailId} />
                    </div>
            <div class="form-group">
                    {/* <label>CGPA</label> */}
                    <input type="number" placeholder='CGPA' onChange={(e) => setCGPA(e.target.value)} defaultValue={location.state.payload.cgpa} />
                    </div>
            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} defaultValue={location.state.payload.phoneNumber} />
                    </div>
            
                
                <Button onClick={UpdateStudent}>Submit</Button>
            
            </Form>
        </div>
    )
    
}

