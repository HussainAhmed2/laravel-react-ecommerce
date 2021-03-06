import { ProductTypes } from "../Types/Product.Types";


const initStateSingleProduct = {
    Product: [
        {
          id: "",
          product_image: '',
          product_name: '',
          product_price: '',
          description: '',
          AverageRating: '',
          category: {
            name: '',

          },
          brand: {
            name: '',
          },
          product_rating: [
            {
              name: '',
              email: '',
              review: '',
              rating: "",
            }
          ],
          priduct_images: [
            {

              image: '',

            }

          ]
        }
      ]
}


const initStateRating = {



    Validation: {
        message: {
            name: [""],
            email: [""],
            review: [""],
            rating: [""],
        },
    },
};

export const GetProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductTypes.FETCH_PRODUCT:
            return { ...state, Products: payload };
        case ProductTypes.GET_PRODUCTS:
            return { ...state, Products: payload };


        default:
            return state;
    }
};

export const ProductStoreReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductTypes.STORE_PRODUCT:
            return { ...state, Product: payload };
        case ProductTypes.VALIDATION_ERRORS:
            return { ...state, ProductValidation: payload };

        default:
            return state;
    }
};

export const GetSingleProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductTypes.GET_SINGLE_PRODUCT:
            return { ...state, Product: payload };


        default:
            return state;
    }
};

export const GetProductbyNameReducer = (state = {}, { type, payload }) => {
    switch (type) {

            case ProductTypes.FETCH_PRODUCT_NAME:
                return { ...state, Product: payload };

        default:
            return state;
    }
};



export const ProductRatingReducer = (state = initStateRating, { type, payload }) => {
    switch (type) {
        case ProductTypes.PRODUCT_RATING:
            return { ...state, Product: payload };
        case ProductTypes.PRODUCT_RATING_VALIDATION_ERRORS:
            return { ...state, Validation: payload };
            case ProductTypes.REMOVE_PRODUCT_RATING_VALIDATION_ERRORS:
            return  state = initStateRating ;

        default:
            return state;
    }
};
