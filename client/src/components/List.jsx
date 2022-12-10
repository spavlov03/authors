import axios from 'axios'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'

const List = ({authors,setAuthors}) => {
  useEffect(()=> {
    axios.get('http://localhost:8000/api/authors')
    .then((res)=>{
      setAuthors(res.data); 
    })
    .catch(err=>console.log(err))
  },[setAuthors])
  const deleteAuthor = (id) => { 
    axios.delete(`http://localhost:8000/api/author/${id}`)
    .then((res)=>{ 
      setAuthors(authors.filter(author=>author._id !== id))
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='mx-auto'>
      <p className='text-start ms-5'><Link to="/new">Add an author</Link></p>
      <p className='text-start ms-5 text'>We have quotes by:</p>
      <table className='border m-3 table table-striped w-75'>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions available</th>
          </tr> 
        </thead>
        <tbody>
          {authors.map((author,index) =>{
            return <tr key={index}>
            <td>{author.name}</td>
            <td><Link to={`/edit/${author._id}`} className="btn btn-warning">Edit</Link><button className='btn btn-danger ms-2' onClick={(e)=>{deleteAuthor(author._id)}} >Delete</button></td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default List