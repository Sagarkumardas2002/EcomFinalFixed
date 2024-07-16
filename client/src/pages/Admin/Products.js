import React, { useState, useEffect } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'



const Products = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // get all products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`https://ecomfinal.onrender.com/api/v1/product/product-list/${page}`);
            setLoading(false)
            setProducts(data.products);
        }
        catch (error) {
            console.log(error)
            toast.error("Something Went Wrong")
        }
    }



    //Lyfecycle method
    useEffect(() => {
        getAllProducts();
        getTotal();
    }, [])


    //getTotal Count  
    const getTotal = async () => {
        try {
            const { data } = await axios.get('https://ecomfinal.onrender.com/api/v1/product/product-count')
            setTotal(data?.total)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (page === 1) return;
        LoadMore();
    }, [page]);

    //load more
    const LoadMore = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`https://ecomfinal.onrender.com/api/v1/product/product-list/${page}`);
            setLoading(false)
            setProducts([...products, ...data?.products]);
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // Truncate description
    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };


    return (

        <Layout>
            <div className="row dashboard" style={{ margin: "0px", overflowX: "hidden" }}>
                <div className="col-lg-3 col-md-4">
                    <AdminMenu />
                </div>
                <div className="col-lg-8 col-md-8">
                    <h1 className='text-center mt-4 '>All Products List</h1>
                    <div className="d-flex flex-wrap justify-content-center " style={{ backgroundColor: "#F2F2F2" }} > {/* Center the product cards */}
                        {products?.map((p) => (
                            <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className="mt-3 mb-3 product-link">
                                <div className="card m-3" style={{ width: '18rem', borderRadius: '4px' }} key={p._id}>
                                    <img src={`https://ecomfinal.onrender.com/api/v1/product/product-photo/${p._id}`} className='card-img-top ' alt={p.name} style={{ width: "100%", height: '300px', objectFit: 'cover', padding: "1px" }} />
                                    <hr style={{ margin: '0px', color: "gray" }} />
                                    <div className="card-body ">
                                        <h5 className='card-title'> {p.name}</h5>
                                        <p className='card-text'>{truncateDescription(p.description, 30)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center">
                        {products && products.length < total && (
                            <div className="card mx-5 mt-0" style={{ width: "14rem", backgroundColor: 'transparent', border: 'none' }}>
                                <button className='btn btn-dark mb-5 mt-3' onClick={(e) => {
                                    e.preventDefault();
                                    setPage(page + 1);
                                }}>
                                    {loading ? "Loading..." : "Load More"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Products



