import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Our Policy -Sagar's Ecom App"}>
            <div className="row contactus mb-5">
                <div className="col-md-6 my-2 mb-4">
                    <img
                        src="/images/policy.jpg"
                        alt="contactus"
                        style={{
                            width: "100%", height: "auto", borderRadius: "4px"
                        }}
                    />
                </div>
                <div className="col-md-5 mx-4 " >
                    <h2 className="sty ">Our policy</h2>
                    <p className="styy"><strong> Rules for platform use, payment, shipping, and legal disclaimers.</strong></p>
                    <hr />
                    <ul>
                        <li>Returns and Refunds Policy: Guidelines for returns, exchanges, refunds, and restocking fees.</li>
                        <li>Payment Security Policy: Assurance of payment information security measures.</li>
                        <li>Customer Service Policy: Contact info, response times, and support channels.</li>
                        <li>Terms of Service: Legal agreement covering user conduct, rights, and dispute resolution.</li>
                        <li>Age Restriction Policy: Minimum age requirements and verification processes.</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Policy;