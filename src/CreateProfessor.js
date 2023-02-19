import React, { useState } from 'react';
import axios from 'axios';
// import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
export default function CreateProfessor() {
    const [name, setName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailId, setEmail] = useState('');
    // const [CGPA, setCGPA] = useState('');

    const postsData = () => {
        if(!name || !branchName || !phoneNumber || !emailId  ){
            window.alert("Incomplete Details")
            return;
        }
        axios.post(`https://63efe6f6271439b7fe78057c.mockapi.io/Professor`, {
            name,
            branchName,
            phoneNumber,
            emailId,
        
        })
         setName('')
         setBranchName('')
         setPhoneNumber('')
         setEmail('')

    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='Name'  onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='Branch Name' onChange={(e) => setBranchName(e.target.value)} value={branchName} />
                    </div>
            

            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                    </div>
                    <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={emailId} />
                    </div>
            
                
                <Button onClick={postsData}  type='submit'>Submit</Button>
            
            </Form>
        </div>
    )
    
}