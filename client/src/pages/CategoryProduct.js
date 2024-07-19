// import Layout from '../components/Layout/Layout'
// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import toast from 'react-hot-toast'
// import { useCart } from '../context/cart';

// const CategoryProduct = () => {
//     const params = useParams();
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [cart, setCart] = useCart();


//     useEffect(() => {
//         if (params?.slug) getProductsByCat();
//     }, [params?.slug])
//     const getProductsByCat = async () => {
//         try {
//             const { data } = await axios.get(`https://ecomfinal.onrender.com/api/v1/product/product-category/${params.slug}`);
//             setProducts(data?.products);
//             setCategory(data?.category);
//         }
//         catch (error) {
//             console.log(error)
//         }

//     }
//     return (
//         <Layout title={'Ecom App Product-category: {category}'}>
//             <div className="container  mt-3">
//                 <h4 className="text-center">Category-{category?.name}</h4>
//                 <h6 className="text-center">{products?.length} results</h6>
//                 <div className="row ">
//                     <div className="d-flex flex-wrap justify-content-center" >

//                         {products?.map((p) => (
//                             <div className="card m-3"
//                                 style={{ width: "21rem", backgroundColor: "orange" }}
//                             >

//                                 <img
//                                     src={`https://ecomfinal.onrender.com/api/v1/product/product-photo/${p._id}`}
//                                     className="card-img-top"
//                                     alt={p.name}
//                                     style={{ width: "100%", height: '310px', transition: "transform 0.3s", objectFit: 'cover', padding: "1px" }}
//                                     onMouseOver={(e) => e.target.style.transform = "scale(0.983)"}
//                                     onMouseOut={(e) => e.target.style.transform = "scale(1)"}
//                                 />
//                                 <hr className='mt-0' style={{ color: " black" }} />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{p.name}</h5>
//                                     <p className="card-text">
//                                         {p.description.substring(0, 30)}...
//                                     </p>
//                                     <h5 className="card-text" style={{ fontWeight: 'bold', color: 'black' }}>₹{p.price}
//                                     </h5>
//                                     <button className="btn btn-primary ms-2 mt-2" onClick={() => navigate(`/product/${p.slug}`)}>MORE DETAILS</button>

//                                     <button className="btn btn-success ms-3 mt-2" onClick={() => {
//                                         setCart([...cart, p]);
//                                         localStorage.setItem("cart", JSON.stringify([...cart, p]))
//                                         toast.success('Item Added to Cart')
//                                     }}>ADD TO CART</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//                 {/* </div> */}
//             </div>
//         </Layout >
//     )
// }

// export default CategoryProduct

import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useCart } from '../context/cart';
import { Spin } from 'antd'; // Import Spin

const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useCart();
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        if (params?.slug) getProductsByCat();
    }, [params?.slug]);

    const getProductsByCat = async () => {
        try {
            const { data } = await axios.get(`https://ecomfinal.onrender.com/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products);
            setCategory(data?.category);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.log(error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    return (
        <Layout title={`Ecom App Product-category: ${category?.name}`}>
            <div className="container mt-3">
                <h4 className="text-center">Category - {category?.name}</h4>
                <h6 className="text-center">{products?.length} results</h6>
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center">
                        {loading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                                <Spin size="large" style={{ fontSize: '3em' }} />
                            </div>
                        ) : (
                            products?.map((p) => (
                                <div className="card m-3" style={{ width: "21rem", backgroundColor: "orange" }} key={p._id}>
                                    <img
                                        src={`https://ecomfinal.onrender.com/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt={p.name}
                                        style={{ width: "100%", height: '310px', transition: "transform 0.3s", objectFit: 'cover', padding: "1px" }}
                                        onMouseOver={(e) => e.target.style.transform = "scale(0.983)"}
                                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                                    />
                                    <hr className='mt-0' style={{ color: "black" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">
                                            {p.description.substring(0, 30)}...
                                        </p>
                                        <h5 className="card-text" style={{ fontWeight: 'bold', color: 'black' }}>₹{p.price}</h5>
                                        <button className="btn btn-primary ms-2 mt-2" onClick={() => navigate(`/product/${p.slug}`)}>MORE DETAILS</button>
                                        <button className="btn btn-success ms-3 mt-2" onClick={() => {
                                            setCart([...cart, p]);
                                            localStorage.setItem("cart", JSON.stringify([...cart, p]));
                                            toast.success('Item Added to Cart');
                                        }}>ADD TO CART</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CategoryProduct;

