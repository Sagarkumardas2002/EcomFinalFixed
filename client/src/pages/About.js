import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us-Sagar's Ecom App"}>
            <div className="row contactus ">
                <div className="col-md-5 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-6">
                    <h3>Your Trust is Our Biggest profit ...</h3>
                    <hr />
                    <p className="text-justify mt-2">
                        Your seamless shopping experience is our priority. With a keen eye on trends and a data-driven approach, we ensure smooth operations and happy customers. Trust in our expertise to navigate the digital realm, providing you with an online store that's both efficient and delightful to explore.
                    </p>

                    <p>Our eCommerce expertise ensures seamless shopping. With trends in mind and data-driven decisions, we prioritize your satisfaction. Trust us to provide an efficient and delightful online store experience.</p>
                </div>
            </div>
        </Layout >
    );
};

export default About;