import {useState,useEffect} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const [name,setName] = useState(""); 
  const [errors,setErrors] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> { 
    axios.get(`http://localhost:8000/api/author/${id}`)
    .then((res)=>{
      setName(res.data.name); 
    })
    .catch(err=>console.log(err))
  },[id])

  const submitHandler = (e) => { 
    e.preventDefault(); 
    axios.put(`http://localhost:8000/api/author/${id}`,{
      name,
    })
    .then(res=>{
      console.log(res); 
      console.log(res.data);
      navigate('/')
    })
    .catch((err)=>{
      console.log(err); 
      setErrors(err.response.data.errors)
    })
  }
  return (
    <div>
      <p className='text-start ms-5'><Link to="/">Home</Link></p>
      <p className='text-start ms-5 text'>Edit this author:</p>
      <form className='w-75 border border-dark p-3 ms-5' onSubmit={submitHandler}>
        <label className='form-label'>Name:</label>
        <input className='form-control' type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null} <br/>
        <div className='mt-3'>
          <Link to='/' className='btn btn-info text-light'>Cancel</Link>
          <input className='btn btn-info text-light ms-3' type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default Edit