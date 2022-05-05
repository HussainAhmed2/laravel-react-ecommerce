import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { emptyCartAction } from "../../../../../Redux/Actions/Cart.Actions";
import { createOrderAction } from "../../../../../Redux/Actions/Order.Actions";
const CheckoutForm = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const { Carts } = useSelector((state) => state.CART);
    const { message } = useSelector((state) => state.CREATE_ORDER.Validation);
    let userid = User.user.id;
    let ListCart = [];
    let QuantityList = [];
    let ProductAmount = [];
    let SubTotalCart = 0;
    let GrantTotalCart = 0;
    let shipmentCost = 50;
    Object.keys(Carts).forEach(function (item) {
        ListCart.push(Carts[item].id);
        QuantityList.push(Carts[item].quantity);
        ProductAmount.push(Carts[item].quantity * Carts[item].product_price);
        SubTotalCart += Carts[item].quantity * Carts[item].product_price;
    });
    console.log("Product Amount", ProductAmount);
    GrantTotalCart = SubTotalCart + shipmentCost;
    const token = User?.token;
    const unique_id = uuid();
    const order_no = unique_id.slice(0, 8);
    localStorage.setItem("order_no", order_no);
    const [Address, setAddress] = React.useState("");
    const [Country, setCountry] = React.useState("");
    const [City, setCity] = React.useState("");
    const [State, setState] = React.useState("");
    const [Zip, setZip] = React.useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const [isSubmit, setIsSubmit] = React.useState(false);

    const auth = () => {
        if (!token) {
            history.push("login");
        }
    };

    const checkoutHandle = (e) => {
        e.preventDefault();
        setIsSubmit(true);

        const postData = new FormData();
        postData.append("order_no", order_no);
        postData.append("user_id", userid);
        postData.append("order_amount", GrantTotalCart);
        postData.append("address", Address);
        postData.append("country", Country);
        postData.append("city", City);
        postData.append("state", State);
        postData.append("zip", Zip);
        postData.append("payment_method", "COD");
        ListCart.forEach((item) => {
            postData.append("product_id[]", item);
        });
        QuantityList.forEach((item) => {
            postData.append("quantity[]", item);
        });
        ProductAmount.forEach((item) => {
            postData.append("amount[]", item);
        });
        dispatch(createOrderAction(token, postData, history));
        dispatch(emptyCartAction());
        setIsSubmit(false);
    };

    React.useEffect(() => {
        auth();
    }, [token, isSubmit]);

    return (
        <>
            <div className="checkout-inner">
                <div className="billing-address">
                    <h2>Billing Address</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Address</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            {message.address ? (
                                <>
                                    <p className="text-danger">
                                        {message.address}
                                    </p>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="col-md-6">
                            <label>Country</label>
                            <select
                                className="custom-select"
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option selected value="United States">
                                    United States
                                </option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="PAkistan">Pakistan</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label>City</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label>State</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="State"
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label>ZIP Code</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="ZIP Code"
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </div>

                        <div className="checkout-btn d-flex justify-content-end mt-4">
                            <button
                                className="btn btn-danger"
                                disabled={isSubmit}
                                onClick={checkoutHandle}
                            >
                                {!isSubmit ? (
                                    "Place Order"
                                ) : (
                                    <>
                                        <span class="spinner-border spinner-border-sm mx-2"></span>
                                        Loading...
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutForm;
