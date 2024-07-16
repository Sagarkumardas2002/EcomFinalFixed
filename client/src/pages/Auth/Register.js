import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import "../../styles/AuthStyles.css";


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    //form handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://ecomfinal.onrender.com/api/v1/auth/register', { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title={"Register-Sagar Ecom App..."}>
            <div className="form-container" >
                <form onSubmit={handleSubmit} >
                    <h3 className='title'>REGISTER  PAGE</h3>
                    <div className="mb-3">
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control" id="exampleInputName" placeholder='Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputemail" placeholder='Email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Password' required />
                    </div>
                    <div className="mb-3">
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Number' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Address' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='What is Your Secret Word  ' required />
                    </div>

                    <button type="submit" className="btn btn-primary">REGISTER</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register
