import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth';


const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout title={"Sagar's App-Dashboard Page.."}>

            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mt-4 mt-md-0" style={{ maxWidth: "100%" }}>
                        <UserMenu />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card mx-4 p-3" style={{ margin: "0 auto", maxWidth: "100%", backgroundColor: "lightblue" }}>
                            <h4 style={{ color: "blue", marginBottom: "1rem" }}>
                                <span style={{ color: "black" }}>Name</span>&nbsp; &nbsp;&nbsp;&nbsp;: {auth?.user?.name}
                            </h4>
                            <h4 style={{ color: "blue", marginBottom: "1rem" }}>
                                <span style={{ color: "black" }}>Email Id</span>&nbsp; : {auth?.user?.email}
                            </h4>
                            <h4 style={{ color: "blue" }}>
                                <span style={{ color: "black" }}>Address</span>&nbsp;&nbsp;: {auth?.user?.address}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Dashboard
