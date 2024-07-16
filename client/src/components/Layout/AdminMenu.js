import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
            <div className="text-center">
                <div className="list-group mt-2 mx-2 p-3" >
                    <h4 style={{ letterSpacing: '1px', fontFamily: "sans-serif", fontWeight: 'bold' }}>ADMIN PANEL</h4>


                    <div style={{ letterSpacing: '1px', borderRadius: "4px", border: "1px solid gray" }} >
                        <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action" style={{ letterSpacing: '1px', borderRadius: "4px" }}>Create Category</NavLink>

                        <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action"> Create Product</NavLink>

                        <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">  Products</NavLink>

                        <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">  Orders</NavLink>

                        <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminMenu
