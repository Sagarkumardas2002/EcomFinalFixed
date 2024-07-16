import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
// import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import moment from 'moment'
import { Select } from 'antd'
const { Option } = Select

const AdminOrders = () => {
    const [status, setStatus] = useState([
        "Not Processed",
        "Processing",
        "Shipped",
        "deliverd",
        "canceled",
    ]);
    const [changeStatus, setChangeStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();

    const getOrders = async () => {
        try {
            const { data } = await axios.get("/api/v1/auth/all-orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    const handleChange = async (orderId, value) => {
        try {
            const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
                status: value,
            });
            getOrders();

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout title={"All Orders Data"}>
            <div className="row m-2">
                <div className="col-md-3 m-2">
                    <AdminMenu />
                </div>
                <div className="col-md-7">
                    <h1 className="text-center" >All Orders</h1>
                    {orders?.map((o, i) => {
                        return (
                            <div key={o._id} className="border shadow p-2 mb-3" style={{ backgroundColor: 'orange', borderRadius: "4px" }}>
                                <div className="table-responsive">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th className='mx-0' scope="col" style={{ margin: '0' }}>Status</th>
                                                <th scope="col" style={{ margin: '0 1rem' }}>Buyer</th>
                                                <th scope="col" style={{ margin: '0 1rem' }}>Date</th>
                                                <th scope="col">Payment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {/* <td>{i + 1}</td> */}
                                                <td>
                                                    <Select
                                                        variant={false} onChange={(value) => handleChange(o._id, value)} defaultValue={o?.status}>
                                                        {status.map((s, i) =>
                                                            (<Option key={i} value={s}>{s}</Option>))}
                                                    </Select>
                                                </td>
                                                <td>{o?.buyer?.name}</td>
                                                <td>{moment(o?.createdAt).format('DD/MM/YYYY')}</td>
                                                <td>{o?.payment.success ? "Success" : "Failed"}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="container ">
                                    {o?.products?.map((p, i) => (
                                        <div className="row mb-2 p-2 card flex-row" key={p._id}>
                                            <div className="col-md-4 my-3">
                                                <img
                                                    src={`/api/v1/product/product-photo/${p._id}`}
                                                    className="card-img-top"
                                                    alt={p.name}
                                                    style={{ border: "1px solid gray", borderRadius: "4px", width: "100%", height: "auto" }}
                                                />
                                            </div>

                                            <div className="col-md-8 mt-lg-4 mx-3 mx-lg-0">
                                                <p>{p.name}</p>
                                                <p>{p.description.substring(0, 60)}</p>
                                                <p> Quantity{o?.products?.length}</p>
                                                <p className='text-danger' style={{ fontWeight: "bold" }}> <span className='text-black'>Price : </span> ₹ {p.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default AdminOrders
