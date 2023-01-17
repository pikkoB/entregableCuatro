import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const UsersForm = ({getUser , userSelected, selectUser}) => {
    const{handleSubmit, register, reset} = useForm()
    const resetUser = {email: "",password: "", first_name: "", last_name: "", birthday: ""}

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else{
            reset(resetUser)
        }
    },[userSelected])

    const submit = (data) => {
        console.log(data)
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    getUser()
                    selectUser(null)
                })
        } else {
            axios.post(`https://users-crud.academlo.tech/users/`, data)
                .then(() => {

                    getUser()
                    reset(resetUser)
                });
        }
    }

  
    return (
       <form onSubmit={handleSubmit(submit)}>
        <h2>New User</h2>
        <div className='input-container'>
            <label htmlFor="email">Email:</label>
            <input type='email' id='email' required
            {...register('email')} />
        </div>
        <div className='input-container'>
            <label htmlFor="password">Password:</label>
            <input type='password' id='password'  required
            {...register('password')} />
        </div>
        <div className='input-container'>
            <label htmlFor="first_name">First_name:</label>
            <input type='text' id='first_name' required
            {...register('first_name')} />
        </div>
        <div className='input-container'>
            <label htmlFor="last_name">Last_name:</label>
            <input type='text' id='last_name'  required
            {...register('last_name')} />
        </div>
        <div className='input-container'>
            <label htmlFor="birthday">birthday:</label>
            <input type='date' id='birthday' required
            {...register('birthday')} />
        </div>
        <button className='btn-form'>Upload</button>
    </form>
    );
};

export default UsersForm;