import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";

import storage from "redux-persist/lib/storage";
import {
    GetProductReducer,
    ProductStoreReducer,
} from "../Reducers/Product.Reducers";
import {
    LoginUserReducer,
    RegisterUserRducers,
} from "../Reducers/User.Reducers";

const persistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["USER_LOGIN"],
};

const rootReducers = combineReducers({
    USER_LOGIN: LoginUserReducer,
    GET_PRODUCTS: GetProductReducer,
    REGISTER_USER: RegisterUserRducers,
    PRODUCT_STORE: ProductStoreReducer,
});

export default persistReducer(persistConfig, rootReducers);
