import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Ingredient {
    name: string;
    description: string;
    benefit: string;
}
export interface Product {
    name: string;
    description: string;
    category: string;
    price: bigint;
}
export interface Testimonial {
    customerName: string;
    quote: string;
    rating: bigint;
}
export interface backendInterface {
    checkHealth(): Promise<boolean>;
    getIngredients(): Promise<Array<Ingredient>>;
    getProducts(): Promise<Array<Product>>;
    getTestimonials(): Promise<Array<Testimonial>>;
}
