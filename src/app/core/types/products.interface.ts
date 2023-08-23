export interface ProductInterface {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: Array<string>,
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string,
    isLoading?: boolean,
    updateCart?: boolean,
    quantity?: number,
}

export interface ProductDataInterface {
    limit: number;
    products: ProductInterface[];
    skip: number;
    total: number;
}