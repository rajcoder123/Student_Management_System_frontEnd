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
    const [branchName, setBranchName] = useState(location.state.payload.branchName);
    const [phoneNumber, setPhoneNumber] = useState(location.state.payload.phoneNumber);
    const [emailId, setEmail] = useState(location.state.payload.emailId);
    // const [CGPA, setCGPA] = useState(location.state.payload.CGPA);

    const UpdateStudent = () => {
        if(!name || !branchName  || !phoneNumber|| !emailId ){
            window.alert("Incomplete Details")
            return;
        }

        const payload = {}
        payload.id = id;
        payload.name = name;
        payload.branchName = branchName;
        payload.phoneNumber = phoneNumber;
        payload.emailId = emailId;
        // payload.CGPA = CGPA;
        console.log(location.state.payload.id);

        axios.put(`http://localhost:8080/professors/${location.state.payload.id}`, payload)
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
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='First Name'  onChange={(e) => setName(e.target.value)} defaultValue={location.state.payload.name}/>
            </div>
            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Branch Name' onChange={(e) => setBranchName(e.target.value)} defaultValue={location.state.payload.branchName} />
                    </div>
            
            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} defaultValue={location.state.payload.phoneNumber} />
                    </div>
                    <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} defaultValue={location.state.payload.emailId} />
                    </div>
            
                
                <Button onClick={UpdateStudent}>Submit</Button>
            
            </Form>
        </div>
    )
    
}

