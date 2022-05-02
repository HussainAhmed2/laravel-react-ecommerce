import apiClient from "./apiclient";

const login = (postData) => apiClient.post("auth/login", postData);

const register = (postData) => apiClient.post("auth/registerUser", postData);

const fetchProducts = (pageNumber = 1, token) =>
    apiClient.get(`getProducts?page=${pageNumber}`, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

const storeProduct = (token, postData) =>
    apiClient.post("storeProducts", postData, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

export default {
    login,
    register,
    fetchProducts,
    storeProduct,
};
