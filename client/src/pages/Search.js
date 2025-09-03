// import React from 'react'
// import Layout from '../components/Layout/Layout'
// import { useSearch } from '../context/ssearch'
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/cart';
// import toast from 'react-hot-toast';

// const Search = () => {
//     const [values, setValues] = useSearch();
//     const navigate = useNavigate();
//     const [cart, setCart] = useCart();
//     return (
//         <Layout title={"Search results"}>
//             <div className="container mb-4">
//                 <div>
//                     <h1 className='text-center mt-3'>Search Results</h1>
//                     <h6 className='text-center text-danger' style={{ fontSize: "20px" }}>
//                         {values?.results.length < 1
//                             ? "No Products Found"
//                             : `Found ${values?.results.length}`}
//                     </h6>
//                     <div className="d-flex flex-wrap justify-content-center mt-4">
//                         {values?.results.map((p) => (
//                             <div key={p._id} className="card m-2" style={{ width: "21rem", maxWidth: "100%", backgroundColor: "orange" }}>
//                                 <img
//                                     src={`https://ecomfinal.onrender.com/api/v1/product/product-photo/${p._id}`}
//                                     className="card-img-top"
//                                     alt={p.name}
//                                     style={{ width: '100%', height: "300px", objectFit: 'cover', borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}
//                                     onMouseOver={(e) => e.target.style.transform = 'scale(0.985)'}
//                                     onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//                                 />
//                                 <hr style={{ margin: '0px', color: "2px solid gray" }} />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{p.name}</h5>
//                                     <p className="card-text">
//                                         {p.description.substring(0, 30)}...
//                                     </p>

//                                     <h5 className="card-text" style={{ fontWeight: 'bold', color: 'black' }}>₹{p.price}</h5>


//                                     <button className="btn btn-primary mb-2 mt-1" onClick={() => navigate(`/product/${p.slug}`)}>MORE DETAILS</button>

//                                     <button className="btn btn-success ms-2 mb-2 mt-1" onClick={() => {
//                                         setCart([...cart, p]);
//                                         localStorage.setItem("cart", JSON.stringify([...cart, p]))
//                                         toast.success('Item Added to Cart')
//                                     }}>ADD TO CART</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </Layout>

//     );
// };

// export default Search;


import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useSearch } from '../context/ssearch';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';

const Search = () => {
  const [values] = useSearch();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (values) {
      // small delay to show skeleton animation
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [values]);

  return (
    <Layout title={"Search results"}>
      <div className="container mb-4">
        <div>
          <h1 className="text-center mt-3">Search Results</h1>
          <h6
            className="text-center text-danger"
            style={{ fontSize: "20px" }}
          >
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>

          <div className="d-flex flex-wrap justify-content-center mt-4">
            {loading
              ? // 🔹 Skeleton loader (same as HomePage)
                Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="card m-2"
                      style={{
                        width: "21rem",
                        maxWidth: "100%",
                        backgroundColor: "orange",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        className="skeleton-img"
                        style={{
                          width: "100%",
                          height: "300px",
                          background:
                            "linear-gradient(90deg, #ddd, #eee, #ddd)",
                          backgroundSize: "200% 100%",
                          animation: "skeleton-loading 1.5s infinite",
                          borderTopLeftRadius: "5px",
                          borderTopRightRadius: "5px",
                        }}
                      />
                      <div className="card-body">
                        <div
                          className="skeleton-line"
                          style={{
                            width: "70%",
                            height: "20px",
                            margin: "10px 0",
                            background:
                              "linear-gradient(90deg, #ddd, #eee, #ddd)",
                            backgroundSize: "200% 100%",
                            animation: "skeleton-loading 1.5s infinite",
                          }}
                        />
                        <div
                          className="skeleton-line"
                          style={{
                            width: "50%",
                            height: "15px",
                            margin: "10px 0",
                            background:
                              "linear-gradient(90deg, #ddd, #eee, #ddd)",
                            backgroundSize: "200% 100%",
                            animation: "skeleton-loading 1.5s infinite",
                          }}
                        />
                        <div
                          className="skeleton-line"
                          style={{
                            width: "40%",
                            height: "20px",
                            margin: "10px 0",
                            background:
                              "linear-gradient(90deg, #ddd, #eee, #ddd)",
                            backgroundSize: "200% 100%",
                            animation: "skeleton-loading 1.5s infinite",
                          }}
                        />
                      </div>
                    </div>
                  ))
              : // 🔹 Actual product cards
                values?.results.map((p) => (
                  <div
                    key={p._id}
                    className="card m-2"
                    style={{
                      width: "21rem",
                      maxWidth: "100%",
                      backgroundColor: "orange",
                    }}
                  >
                    <img
                      src={`https://ecom-final-fixed-backup.onrender.com/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderTopRightRadius: "5px",
                        borderTopLeftRadius: "5px",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.transform = "scale(0.985)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                    <hr style={{ margin: "0px", color: "2px solid gray" }} />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <h5
                        className="card-text"
                        style={{
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        ₹{p.price}
                      </h5>
                      <button
                        className="btn btn-primary mb-2 mt-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        MORE DETAILS
                      </button>
                      <button
                        className="btn btn-success ms-2 mb-2 mt-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to Cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* 🔹 Skeleton CSS animation */}
      <style>
        {`
          @keyframes skeleton-loading {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Search;
