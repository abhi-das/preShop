export enum ActionTypes {
    // Product
    PRODUCT_FETCH_REQUEST = 'PRODUCT_FETCH_REQUEST',
    PRODUCT_FETCH_REQUEST_SUCCESS = 'PRODUCT_FETCH_REQUEST',
    PRODUCT_FETCH_REQUEST_FAIL = 'PRODUCT_FETCH_REQUEST'

}

export interface Product {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

export type ProductState = {
    products: Product[]
}

export type ResponseError = {
    key?: string;
    errorText: string;
};
