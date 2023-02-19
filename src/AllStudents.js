import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { First } from 'react-bootstrap/lib/Pagination';
// import { Link } from 'react-router-dom';
 
    function SmallExample() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`http://localhost:8080/students`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
      <div>
      <button type='button' className='addbutton' class="btn btn-success" onClick={()=>handleCreate()} >Add Student</button>
      </div>
      <div>
    <Table  className='table' striped bordered hover size="sm">
      <thead >
        <tr >
          {/* <th>First Name</th> */}
          {/* <th>Last Name</th> */}
          <th>Name</th>
          <th>Branch </th>
          <th>Email </th>
          <th>CGPA</th>
          <th>Phone Number</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
      {data.map((datas) => 
         (
        <tr>
          <td>{datas.name}</td>
          <td>{datas.branchName}</td>
          <td>{datas.emailId}</td>
          <td>{datas.cgpa}</td>
          <td>{datas.phoneNumber}</td>
          <td>
             <button type='button' className='edit'class="btn btn-primary" onClick={()=>handleUpdate(datas)} >Update</button>
             <button type='button'className='delete'  class="btn btn-danger" onClick={()=>handleDelete(datas.id)} >Delete</button>
          </td>
        </tr>
       
        ))} 
      </tbody>
    </Table>
    </div>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`http://localhost:8080/students/`+id)
     }
     del();
     const updatedData = data.filter((d) => id !== d.id)
     setData(updatedData)
    
    }
    function handleUpdate(data){
      const payload = {}
      payload.id = data.id;
      payload.name = data.name;
      payload.branchName = data.branchName;
      payload.emailId = data.emailId;
      payload.cgpa = data.cgpa;
      payload.phoneNumber = data.phoneNumber;
      console.log(payload);
      navigate("/Update",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
      navigate("/Create")
    }

}

export default SmallExample;