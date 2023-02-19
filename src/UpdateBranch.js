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
    const [hod, setHOD] = useState(location.state.payload.hod);
    const [seats, setSeats] = useState(location.state.payload.seats);
    const [filledSeats, setFilledSeats] = useState(location.state.payload.filledSeats);
    const [faculties, setFaculties] = useState(location.state.payload.faculties);
    // const [CGPA, setCGPA] = useState(location.state.payload.CGPA);

    const UpdateStudent = () => {
        if(!name || !hod || !seats || !filledSeats || !faculties ){
            window.alert("Incomplete Details")
            return;
        }

        const payload = {}
        payload.id = id;
        payload.name = name;
        payload.hod = hod;
        payload.seats = seats;
        payload.filledSeats = filledSeats;
        payload.faculties = faculties;
        // payload.CGPA = CGPA;
        console.log(location.state.payload.id);

        axios.put(`http://localhost:8080/branches/${location.state.payload.id}`, payload)
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
                    <input type="text" placeholder='Name'  onChange={(e) => setName(e.target.value)} defaultValue={location.state.payload.name}/>
            </div>
            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='HOD' onChange={(e) => setHOD(e.target.value)} defaultValue={location.state.payload.hod} />
                    </div>
            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Seats' onChange={(e) => setSeats(e.target.value)} defaultValue={location.state.payload.seats} />
                    </div>
            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" placeholder='Filled Seats' onChange={(e) => setFilledSeats(e.target.value)} defaultValue={location.state.payload.filledSeats} />
                    </div>
            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Faculties' onChange={(e) => setFaculties(e.target.value)} defaultValue={location.state.payload.faculties} />
                    </div>
            
                
                <Button onClick={UpdateStudent}>Submit</Button>
            
            </Form>
        </div>
    )
    
}

