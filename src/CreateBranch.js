import React, { useState } from 'react';
import axios from 'axios';
// import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
export default function CreateBranch() {
    const [name, setName] = useState('');
    const [hod, setHOD] = useState('');
    const [seats, setSeats] = useState('');
    const [filledSeats, setFilledSeats] = useState('');
    const [faculties, setFaculties] = useState('');
    // const [CGPA, setCGPA] = useState('');

    const postsData = () => {
        if(!name || !hod || !seats || !filledSeats || !faculties  ){
            window.alert("Incomplete Details")
            return;
        }
        axios.post(`http://localhost:8080/branches`, {
            name,
            hod,
            seats,
            filledSeats,
            faculties,
        
        })
         setName('')
         setHOD('')
         setSeats('')
         setFilledSeats('')
         setFaculties('')

    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='Branch Name'  onChange={(e) => setName(e.target.value)} value={name}/>
            </div>

            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='HOD' onChange={(e) => setHOD(e.target.value)} value={hod} />
                    </div>

            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="number" placeholder='Seats' onChange={(e) => setSeats(e.target.value)} value={seats} />
                    </div>

            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="number" placeholder='Filled Seats' onChange={(e) => setFilledSeats(e.target.value)} value={filledSeats} />
                    </div>

            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Faculties' onChange={(e) => setFaculties(e.target.value)} value={faculties} />
                    </div>
            
                
                <Button onClick={postsData}  type='submit'>Submit</Button>
            
            </Form>
        </div>
    )
    
}