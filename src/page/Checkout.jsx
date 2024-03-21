import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Checkout() {
    return (
        <>
            <Header />
            {/*/header*/}
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="active">Check out</li>
                        </ol>
                    </div>
                    {/*/register-req*/}
                    <div className="shopper-informations">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="shopper-info" style={{ marginBottom: '30px' }}>
                                    <p>Check out</p>
                                    <form>
                                        <input type="text" placeholder="Full Name" />
                                        <input type="text" placeholder="Phone Number" />
                                        <input type="text" placeholder="Adress" />
                                    </form>
                                    {/* <a className="btn btn-primary" href="">
                                        Get Quotes
                                    </a> */}
                                    <a className="btn btn-primary" href="">
                                        Continue
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-payment">
                        <h2>Review &amp; Payment</h2>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description" />
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart_product">
                                        <a href="">
                                            <img src="images/cart/one.png" alt="" />
                                        </a>
                                    </td>
                                    <td className="cart_description">
                                        <h4>
                                            <a href="">Colorblock Scuba</a>
                                        </h4>

                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href="">
                                                {" "}
                                                +{" "}
                                            </a>
                                            <input
                                                className="cart_quantity_input"
                                                type="text"
                                                name="quantity"
                                                defaultValue={1}
                                                autoComplete="off"
                                                size={2}
                                            />
                                            <a className="cart_quantity_down" href="">
                                                {" "}
                                                -{" "}
                                            </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href="">
                                            <i className="fa fa-times" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href="">
                                            <img src="images/cart/two.png" alt="" />
                                        </a>
                                    </td>
                                    <td className="cart_description">
                                        <h4>
                                            <a href="">Colorblock Scuba</a>
                                        </h4>

                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href="">
                                                {" "}
                                                +{" "}
                                            </a>
                                            <input
                                                className="cart_quantity_input"
                                                type="text"
                                                name="quantity"
                                                defaultValue={1}
                                                autoComplete="off"
                                                size={2}
                                            />
                                            <a className="cart_quantity_down" href="">
                                                {" "}
                                                -{" "}
                                            </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href="">
                                            <i className="fa fa-times" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href="">
                                            <img src="images/cart/three.png" alt="" />
                                        </a>
                                    </td>
                                    <td className="cart_description">
                                        <h4>
                                            <a href="">Colorblock Scuba</a>
                                        </h4>

                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href="">
                                                {" "}
                                                +{" "}
                                            </a>
                                            <input
                                                className="cart_quantity_input"
                                                type="text"
                                                name="quantity"
                                                defaultValue={1}
                                                autoComplete="off"
                                                size={2}
                                            />
                                            <a className="cart_quantity_down" href="">
                                                {" "}
                                                -{" "}
                                            </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href="">
                                            <i className="fa fa-times" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>&nbsp;</td>
                                    <td colSpan={2}>
                                        <table className="table table-condensed total-result">
                                            <tbody>
                                                <tr>
                                                    <td>Total</td>
                                                    <td>
                                                        <span>$61</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payment-options">
                        <span>
                            <label>
                                <input type="checkbox" /> Direct Bank Transfer
                            </label>
                        </span>
                        <span>
                            <label>
                                <input type="checkbox" /> Check Payment
                            </label>
                        </span>
                        <span>
                            <label>
                                <input type="checkbox" /> Paypal
                            </label>
                        </span>
                    </div>
                </div>
            </section>{" "}
            {/*/#cart_items*/}
            <Footer />
        </>

    )
}

export default Checkout;