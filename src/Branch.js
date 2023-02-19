import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { First } from 'react-bootstrap/lib/Pagination';
// import { Link } from 'react-router-dom';
 
    function Branch() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`http://localhost:8080/branches`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
        <button type='button' className='addbutton' class="btn btn-success" onClick={()=>handleCreate()} >Add Branch</button>
    <Table  className='table' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>HOD</th>
          <th>Total Seats</th>
          <th>Filled Seats</th>
          <th>Faculties</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
      {data.map((datas) => 
         (
        <tr>
          <td>{datas.name}</td>
          <td>{datas.hod}</td>
          <td>{datas.seats}</td>
          <td>{datas.filledSeats}</td>
          <td>{datas.faculties}</td>
          <td>
             <button type='button' className='edit'class="btn btn-primary" onClick={()=>handleUpdate(datas)} >Update</button>
             <button type='button' className='delete'  class="btn btn-danger" onClick={()=>handleDelete(datas.id)} >Delete</button>
          </td>
        </tr>
       
        ))} 
      </tbody>
    </Table>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`http://localhost:8080/branches/`+id)
     }
     del();
     const updatedData = data.filter((d) => id !== d.id)
     setData(updatedData)
    
    }
    function handleUpdate(data){
      const payload = {}
      payload.id = data.id;
      payload.name = data.name;
      payload.hod = data.hod;
      payload.seats = data.seats;
      payload.filledSeats = data.filledSeats;
      payload.faculties = data.faculties;
      console.log(payload);
      navigate("/UpdateBranch",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
        navigate("/CreateBranch")
      }
}

export default Branch;