import { combineReducers } from "redux";
import { AppState } from "../types";
// import { ProductState } from "../types";
import { productReducer } from "./productReducer";



export const initialState: AppState = {
    products: [{
        _id: '1',
        name: 'Airpods Wireless Bluetooth Headphones',
        image: '/images/airpods.jpg',
        description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12
    }]
};

export const rootReducer = combineReducers({
    products: productReducer
})

export type RootState = ReturnType<typeof rootReducer>;