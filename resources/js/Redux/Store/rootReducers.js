import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { CartReducers } from "../Reducers/Cart.Reducers";
import { CheckoutPaymentReducer } from "../Reducers/Checkout.Reducers";
import {
    createOrderReducer,
    fetchOrderReducer,
} from "../Reducers/Order.Reducers";
import {
    GetProductReducer,
    ProductStoreReducer,
} from "../Reducers/Product.Reducers";
import {
    LoginUserReducer,
    RegisterUserRducers,
    fetchUserOrderReducer,
    fetchUserWishlistReducer,
} from "../Reducers/User.Reducers";

const persistCartConfig = {
    key: "cart",
    storage: storage,
    whitelist: ["CART"],
};

const persistAuthConfig = {
    key: "auth",
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: "my-super-secret-key",
            onError: function (error) {
                console.log("Error in auth config", error);
            },
        }),
    ],
};

const rootReducers = combineReducers({
    USER_LOGIN: persistReducer(persistAuthConfig, LoginUserReducer),
    GET_PRODUCTS: GetProductReducer,
    REGISTER_USER: RegisterUserRducers,
    PRODUCT_STORE: ProductStoreReducer,
    CART: CartReducers,
    CHECKOUT_PAYMENT: CheckoutPaymentReducer,
    CREATE_ORDER: createOrderReducer,
    SINGLE_ORDER: fetchOrderReducer,
    USER_ORDERS: fetchUserOrderReducer,
    USER_WISHLIST: fetchUserWishlistReducer,
});

export default persistReducer(persistCartConfig, rootReducers);
