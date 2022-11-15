import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react";

const UsersForm = ({ getUsers, selectUsers, setVisibility, visibility, deselect }) => {
    const { handleSubmit, register, reset } = useForm()
    const inicialValue = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
    }
    useEffect(() => {
        if (selectUsers) {
            setVisibility(true)
            reset(selectUsers)
        } else {
            reset(inicialValue)
        }
    }, [selectUsers])

    const submit = (data) => {
        if (selectUsers) {

            axios.put(`https://users-crud1.herokuapp.com/users/${selectUsers.id}/`, data)
                .then(() => {
                    getUsers()
                   

                })


        } else {
            axios.post(`https://users-crud1.herokuapp.com/users/`, data)
                .then(() => {
                    getUsers()
                })
        }


    }



    return (
        <div className="container" id={visibility ? "form-flex2" : "form-none2"}>
            <form onSubmit={handleSubmit(submit)}>
                <button onClick={() => { setVisibility(false) }} type="button" className="close"><i className='bx bx-x'></i></button>
                <div className="name">
                    <i className='bx bx-user'></i>
                    <input type="text" id="name" placeholder="First Name" {...register("first_name")} />
                    <input type="text" placeholder="Last Name" {...register("last_name")} />
                </div>

                <div className="uno">
                    <i className='bx bx-envelope'></i>

                    <input type="text" id="email" placeholder="email" {...register("email")} />
                </div>
                <div className="dos">
                    <i className='bx bx-lock-alt'></i>

                    <input type="password" id="password" placeholder="Password" {...register("password")} />
                    <i className='bx bx-show' id="bx"></i>
                </div>
                <div className="tres">
                    <i className='bx bx-cake'></i>

                    <input type="date" id="birthday" placeholder="Birthday" {...register("birthday")} />
                </div>
                <button className="button-submit" onClick={() => { setVisibility(false) }}>Subscribe</button>
            </form>
        </div>
    )
}
export default UsersForm