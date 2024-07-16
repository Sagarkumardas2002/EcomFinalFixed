import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from "../../context/auth";
const Users = () => {
    const [auth] = useAuth();
    return (

        <Layout title={"Dashboard - All Users Details"}>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <AdminMenu />
                    </div>
                    <div className="col-lg-6 col-md-8 p-4">
                        <h1 className="text-center ">Users Details</h1>
                        <div className="card p-4">
                            <h5>Name: {auth?.user?.name}</h5>
                            <h6>Email: {auth?.user?.email}</h6>
                            <h6>Address: {auth?.user?.address}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Users
