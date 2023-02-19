import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
export default function Create() {
    const [name, setName] = useState('');
    const [branchName, setBranch] = useState('');
    const [emailId, setEmail] = useState('');
    const [cgpa, setCGPA] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const postData = () => {
        if(!name|| !branchName || !emailId  || !cgpa|| !phoneNumber){
            window.alert("Incomplete Details")
            return;
        }
        axios.post(`http://localhost:8080/students`, {
            name,
            branchName,
            emailId,
            cgpa,
            phoneNumber,
        
        })
         setName('')
         setBranch('')
         setEmail('')
         setCGPA('')
         setPhoneNumber('')
          alert("Hello! Data added Successfully");
    }
    return (
        <div>
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='Name'  onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Branch' onChange={(e) => setBranch(e.target.value)} value={branchName} />
                    </div>
            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={emailId} />
                    </div>
                    <div class="form-group">
                    {/* <label>CGPA</label> */}
                    <input type="number" placeholder='CGPA' onChange={(e) => setCGPA(e.target.value)} value={cgpa} />
                    </div>
                    <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                    </div>
                
                <Button onClick={postData}  type='submit'>Submit</Button>
            
            </Form>
        </div>
    )
    
}