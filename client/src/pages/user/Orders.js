import React, { useState, useEffect } from 'react'
import Layout from './../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import moment from "moment";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
    const getOrders = async () => {
        try {
            const { data } = await axios.get("https://ecomfinal.onrender.com/api/v1/auth/orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);



    return (
        // duplicate 
        <Layout title={"Sagar's Ecom-Your Orders"}>
            <div className="container-fluid p-3 dashboard">
                <div className="row">
                    <div className="col-lg-3 mb-3 mb-sm-0 mb-md-0 mb-lg-3">
                        <UserMenu />
                    </div>
                    <div className="col-lg-8 ">
                        <h1 className="text-center mb-4  mt-sm-6">All Orders</h1>
                        {orders?.map((o, i) => {

                            return (
                                <div className="border shadow p-2 mb-3 mt-2" style={{ backgroundColor: 'orange', borderRadius: "4px" }}>
                                    <div className="table-responsive">
                                        <table className="table ">
                                            <thead>
                                                <tr >
                                                    <th style={{ marginLeft: "-13px" }} scope="col">Status</th>
                                                    <th scope="col">Buyer</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Payment</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{o?.status}</td>
                                                    <td>{o?.buyer?.name}</td>
                                                    <td>{moment(o?.createdAt).format('DD/MM/YYYY')}</td>
                                                    <td>{o?.payment.success ? "Success" : "Failed"}</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="container  auto">
                                        {o?.products?.map((p, i) => (

                                            <div className="row mb-2 p-2 card flex-row" key={p._id}>
                                                <div className="col-12 col-md-4 ">
                                                    <img
                                                        src={`https://ecomfinal.onrender.com/api/v1/product/product-photo/${p._id}`}
                                                        className="mb-2 mt-2 card-img-top"
                                                        alt={p.name}
                                                        style={{ border: "1px solid gray", borderRadius: "4px", width: "100%", height: "auto" }}
                                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'}
                                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                                    />
                                                </div>
                                                <div className='col-12 col-md-8'>
                                                    <div className="mt-3">
                                                        <p>{p.name}</p>
                                                        <p>{p.description.substring(0, 60)}</p>

                                                        <p className="quantity" style={{ fontSize: window.innerWidth < 768 ? "14px" : "inherit" }}>
                                                            Quantity: {p.quantity}
                                                        </p>
                                                        <h5 className='text-danger' style={{ fontWeight: "bold" }}>Price : ₹ {p.price}</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>

    );
}

export default Orders
