import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { First } from 'react-bootstrap/lib/Pagination';
// import { Link } from 'react-router-dom';
 
    function Professor() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`http://localhost:8080/professors`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
        <button type='button' className='addbutton'class="btn btn-success" onClick={()=>handleCreate()} >Add Professor</button>
    <Table  className='table' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Branch</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
      {data.map((datas) => 
         (
        <tr>
          <td>{datas.name}</td>
          <td>{datas.branchName}</td>
          <td>{datas.phoneNumber}</td>
          <td>{datas.emailId}</td>
          <td>
             <button type='button' className='edit'class="btn btn-primary" onClick={()=>handleUpdate(datas)} >Update</button>
             <button type='button' className='delete' class="btn btn-danger" onClick={()=>handleDelete(datas.id)} >Delete</button>
          </td>
        </tr>
       
        ))} 
      </tbody>
    </Table>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`http://localhost:8080/professors/`+id)
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
      payload.phoneNumber = data.phoneNumber;
      payload.emailId = data.emailId;
      console.log(payload);
      navigate("/UpdateProfessor",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
        navigate("/CreateProfessor")
      }
}

export default Professor;