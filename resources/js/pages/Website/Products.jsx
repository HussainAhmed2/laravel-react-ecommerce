import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../Redux/Actions/Product.Actions";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Brands from "./components/widgets/Home/Brands";
import DetailCardLoader from "./components/widgets/Product/DetailCardLoader";
import DetailsCard from "./components/widgets/Product/DetailsCard";
import ProductItems from "./components/widgets/Product/ProductItems";
import Pagination from "react-js-pagination";

const Products = () => {
    const [isloaded, setIsloaded] = React.useState(false);
    const dispatch = useDispatch();
    const { Products } = useSelector((state) => state.GET_PRODUCTS);
    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 })),
            });
        }, 1500);
    };
    console.log("Products =", Products);
    React.useEffect(() => {
        dispatch(fetchProductAction()).then(() => {
            setIsloaded(true);
        });
    }, [isloaded]);
    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Products"
                SecondName="Products"
                CurrentName="Product List"
            />

            <div class="product-view">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="product-view-top">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="product-search">
                                                    <input
                                                        type="email"
                                                        value="Search"
                                                    />
                                                    <button>
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="product-short">
                                                    <div class="dropdown">
                                                        <div
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown"
                                                        >
                                                            Product short by
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                Newest
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                Popular
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                Most sale
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="product-price-range">
                                                    <div class="dropdown">
                                                        <div
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown"
                                                        >
                                                            Product price range
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $0 to $50
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $51 to $100
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $101 to $150
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $151 to $200
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $201 to $250
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $251 to $300
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $301 to $350
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $351 to $400
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $401 to $450
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $451 to $500
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {!isloaded ? (
                                    <>
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                    </>
                                ) : (
                                    <>
                                        {Products.data.map((product, index) => (
                                            <>
                                                <DetailsCard
                                                    id={product.id}
                                                    product_image={
                                                        product.product_image
                                                    }
                                                    product_name={
                                                        product.product_name
                                                    }
                                                    product_price={
                                                        product.product_price
                                                    }
                                                />
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>

                            <div class="col-md-12 d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <Pagination
                                        activePage={
                                            Products?.current_page
                                                ? Products?.current_page
                                                : 0
                                        }
                                        itemsCountPerPage={
                                            Products?.per_page
                                                ? Products?.per_page
                                                : 0
                                        }
                                        totalItemsCount={
                                            Products?.total
                                                ? Products?.total
                                                : 0
                                        }
                                        onChange={(pageNumber) => {
                                            dispatch(
                                                fetchProductAction(pageNumber)
                                            );
                                        }}
                                        pageRangeDisplayed={8}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        firstPageText="First Page"
                                        lastPageText="Last Lage"
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brands />
            <Footer />
        </>
    );
};

export default Products;
