import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import View from './View';
import './Admin.css'

function Admin({datas,setdatas,name,setName,email,setEmail,phoneNo,setPhoneNo,message,setMessage}){
    const [emails, setEmails] = useState("");
    const [password, setpassword] = useState("");
    const [login, setlogin] = useState(0);
    const details = ["admin@gmail.com", "admin"]
    const onSubmit = (e) => {
        e.preventDefault();
        if (emails === details[0] && password == details[1]) {
            alert("Login successful");
            setlogin(1);
        } else {
            alert("Incorrect Details");
        }
    };

    const deleteData = (phoneNo) => {
        const filteredDatas = datas.filter((element, index) => {
          return element.phoneNo !== phoneNo
        })
        setdatas(filteredDatas);
    }
    const back = () => {
        setlogin(0);
    }
    
    return (
        <>
            {login==1 ? 
            <div className="container2">
                <div className='view-container'>
                {datas.length > 0 && <>
                    <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <View datas={datas} deleteData={deleteData} />
                        </tbody>
                    </table>
                    </div>
                    <button className='btn btn-danger btn-md'
                    onClick={() => setdatas([])}>Remove All</button>
                </>}
                {datas.length < 1 && <div>No Data Submitted yet</div>}
                </div>
                <div className="back-page">
                    <button className='btn' onClick={back}>Back</button>
                </div>
            </div> 
            
            :
                <div className='contact'>
                        <div className='admin-logo'><h1>Admin Login</h1></div>
                        <form onSubmit={onSubmit} className="form-container">
                            <input value={emails} onChange={(e) => setEmails(e.target.value)} type="email" placeholder='Enter your email' className='inputs' />
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder='Enter your password'className='inputs' />
                            <button className='submits'>Submit</button>
                        </form>
                </div>
                 }
        </>
    )
}

export default Admin