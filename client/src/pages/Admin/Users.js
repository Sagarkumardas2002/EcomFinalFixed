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

// import React, { useEffect, useState } from 'react';
// import Layout from '../../components/Layout/Layout';
// import AdminMenu from '../../components/Layout/AdminMenu';
// import axios from 'axios';
// import { useAuth } from "../../context/auth";

// const Users = () => {
//     const [auth] = useAuth();
//     const [users, setUsers] = useState([]);

//     const getUsers = async () => {
//         try {
//             const { data } = await axios.get("https://ecomfinal.onrender.com/api/v1/auth/all-users", {
//                 headers: {
//                     Authorization: `Bearer ${auth.token}`
//                 }
//             });
//             setUsers(data.users);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (auth?.token) {
//             getUsers();
//         }
//     }, [auth?.token]);

//     return (
//         <Layout title={"Dashboard - All Users Details"}>
//             <div className="container-fluid p-3">
//                 <div className="row">
//                     <div className="col-lg-3 col-md-4">
//                         <AdminMenu />
//                     </div>
//                     <div className="col-lg-6 col-md-8 p-4">
//                         <h2 className="text-center">All Users</h2>
//                         <div className="table-responsive">
//                             <table className='table'>
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">Name</th>
//                                         <th scope="col">Email</th>
//                                         <th scope="col">Address</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {users.map((user) => (
//                                         <tr key={user._id}>
//                                             <td>{user.name}</td>
//                                             <td>{user.email}</td>
//                                             <td>{user.address}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default Users;
