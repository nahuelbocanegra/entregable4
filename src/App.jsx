import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import UsersList from './componentes/UsersList'
import UsersForm from "./componentes/UsersForm"
function App() {
  const[users,setUsers]=useState([])
  const [selectUsers, setSelectUsers] = useState(null)
  const [visibility, setVisibility] = useState(true)
 
  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then((res)=>{setUsers(res.data)})
    
  },[])
  const getUsers=()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then((res)=>{setUsers(res.data)})
  }
  const select=(userselect)=>{
    setSelectUsers(userselect)
    console.log(userselect)
  }
  const deselect = () => {
    setSelectUsers(null)
  }

  const deleteUsers=(user)=>{
     axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`).then(()=>{getUsers()}).catch(error=>{console.log(error.response.data)})
  }
  return (
    <div className="App">
      
      <button className="button-user" onClick={() => {
        deselect()
        setVisibility(true)
        
      }}><i className='bx bx-user-plus'></i></button>
      
      
      <UsersList 
      users={users} 
      deleteUsers={deleteUsers}
      select={select} ></UsersList>
      <UsersForm id={visibility ? "form-flex" : "form-none"} getUsers={getUsers} selectUsers={selectUsers} setVisibility={setVisibility} visibility={visibility}
      deselect={deselect}></UsersForm>

    </div>
  )
}

export default App
