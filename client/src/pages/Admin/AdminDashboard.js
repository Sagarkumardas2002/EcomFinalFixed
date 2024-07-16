import React from 'react'
import Layout from './../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid mt-2" style={{ overflowX: 'hidden' }}>
                <div className="row">
                    <div className="col-lg-3 col-md-4"> {/* Adjusted column width for smaller screens */}
                        <AdminMenu />
                    </div>
                    <div className="col-lg-5 col-md-8 mt-sm-2 mt-lg-5" > {/* Adjusted column width for smaller screens */}
                        <div className="card p-3 m-4" style={{ backgroundColor: "#F2F2F2" }}>
                            <h4>Admin &nbsp; &nbsp;: <span className='text-primary'>{auth?.user?.name}</span></h4>
                            <h5>Contact&nbsp;&nbsp;&nbsp;: <span className='text-primary'>{auth?.user?.phone}</span></h5>
                            <h5>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className='text-primary'>{auth?.user?.email}</span></h5>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default AdminDashboard
