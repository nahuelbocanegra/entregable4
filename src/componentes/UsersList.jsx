import React from "react"
const UsersList = ({ users,deleteUsers ,select} ) => {

   

    return (
           
        
            <ul className="container-card">
                {
                    users.map((user)=>(
                    <li key={user.id}>
                        <div className="user">
                        <i className='bx bx-user-circle photo' ></i>
                        <button className="plus">+</button>
                        </div>
                        <div className="info-user">
                            <p><b>Name:</b> {user.first_name} {user.last_name}</p>
                            <p><b>Mail:</b> {user.email}</p>
                            <p><b>Birthday:</b>{user.birthday}</p>
                        </div>
                        <div className="delete-user">
                            <button onClick={()=>{deleteUsers(user)}}><i className='bx bx-trash'></i></button>
                            <button onClick={()=>{select(user)}}><i className='bx bx-history'></i></button>
                        </div>
                    </li>
                    ))
                
                }
            </ul>



)
}
                    export default UsersList
