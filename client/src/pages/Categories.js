import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import useCategory from '../hooks/useCategory'
import { Link } from 'react-router-dom'


const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <h1 className='text-center mt-4 great1'>AVAILABLE  CATEGORY</h1>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row">
                    {categories.map((c) => (
                        <div className="col-lg-4  col-md-6 mt-2 mb-2" key={c._id}>
                            <div className="card">
                                <Link to={`/category/${c.slug}`} className="btn btn-warning">
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>

    )
}

export default Categories
