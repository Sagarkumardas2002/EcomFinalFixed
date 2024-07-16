import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 col-md-12  text-center">
                    <h4 className=" fs-3 mt-3" style={{ color: "maroon" }}>Dashboard</h4>
                    <div className="list-group">
                        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
                        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default UserMenu
