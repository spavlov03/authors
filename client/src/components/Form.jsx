import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Form = ({authors,setAuthors}) => {
  const [name,setName] = useState(""); 
  const [errors,setErrors] = useState({});
  const navigate = useNavigate();
  const submitHandler = (e) => { 
    e.preventDefault(); 
    axios.post('http://localhost:8000/api/author',{
      name,
    })
    .then(res=>{
      console.log(res); 
      console.log(res.data);
      setAuthors([...authors,res.data])
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
      <p className='text-start ms-5 text'>Add a new author:</p>
      <form className='w-50 border border-dark p-3 ms-5' onSubmit={submitHandler}>
        <label className='form-label'>Name:</label>
        <input className='form-control' type="text" name='name' onChange={(e)=>setName(e.target.value)}/>
        {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null} <br/>
        <div className='mt-3'>
          <Link to='/' className='btn btn-info text-light'>Cancel</Link>
          <input className='btn btn-info text-light ms-3' type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default Form