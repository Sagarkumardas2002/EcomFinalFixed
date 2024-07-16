import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from "../../context/cart"
import { Badge } from 'antd';


const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: '',
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully..")
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark lg-body-tertiary" >
        <div className="container-fluid">
          <Link to="/" className="navbar-brandd"><FaShoppingCart /> Ecommerce App</Link>
          <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mt-1" />
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">

            <ul className=" navbar-nav ms-auto mb-2 mt-2 mx-4  mb-lg-1">

              <li className='nav-item mx-3 mx-lg-0'>  <SearchInput className='desheader' /></li>
              <li className='ms-4'></li>
              <li className="nav-item mx-4 mx-lg-0">
                <NavLink to="/" className="nav-link text-white" >Home</NavLink>
              </li>


              <li className="nav-item dropdown mx-4 mx-lg-0">
                <Link className="nav-link dropdown-toggle text-white"
                  to={"/categories"}
                  data-bs-toggle="dropdown">
                  Categories
                </Link>

                <ul className="dropdown-menu " >
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>All Categories</Link>
                  </li>

                  {categories?.map((c, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" to={`/category/${c.slug}`} >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>




              {!auth.user ? (<>
                <li className="nav-item mx-4 mx-lg-0">
                  <NavLink to="/register" className="nav-link text-white">Register</NavLink>
                </li>

                <li className="nav-item mx-4 mx-lg-0">
                  <NavLink to="/login" className="nav-link text-white" >Login</NavLink>
                </li>
              </>) : (

                <>
                  <li className="nav-item dropdown mx-4 mx-lg-0">
                    <NavLink
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>

              )
              }

              <li className="nav-item mx-4 mx-lg-0">
                <Badge count={cart?.length} showZero className='mt-1  '>
                  <NavLink to="/cart" className="nav-link text-white great">CART
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>


  )
}

export default Header
