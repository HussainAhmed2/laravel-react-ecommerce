import React from "react";

const DetailsCard = (props) => {
    const url = process.env.MIX_APP_URL || "";
    return (
        <>
            <div className="col-md-4">
                <div className="product-item">
                    <div className="product-title">
                        <a href="#">{props.ProductName}</a>
                        <div className="ratting">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="product-image">
                        <a href="product-detail.html">
                            <img
                                src={
                                    url +
                                    "public/WebsiteAssets/img/" +
                                    props.ProductImage
                                }
                                alt="Product Image"
                            />
                        </a>
                        <div className="product-action">
                            <a href="#">
                                <i className="fa fa-cart-plus"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                    <div className="product-price">
                        <h3>
                            <span>$</span>
                            {props.ProductPrice}
                        </h3>
                        <a className="btn" href="">
                            <i className="fa fa-shopping-cart"></i>Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsCard;