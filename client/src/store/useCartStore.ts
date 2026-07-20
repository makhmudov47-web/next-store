import {create} from "zustand";
import type {Product} from "../components/types/products.ts";

export interface CartItem extends  Product {
    quantity:number
}

interface CartState {
    items:CartItem[]
    addToCart: (product:Product) => void
    decreaseQuantity: (productId: string) => void;
    removeFromCart:(productId:string) => void;
    clearCart:() => void;
    getTotalItems:() => number;
    getTotalPrice:() => number;


}

export const useCartStore = create<CartState>((set, get) => ({

    items:[],
    // Добавление товара (или увеличение количества)
    addToCart: (product) => {
        set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id);

            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            }

            return { items: [...state.items, { ...product, quantity: 1 }] };
        });
    },
    // Уменьшение количества товара на 1 (или удаление, если остался последний)
    decreaseQuantity:(productId) =>  {
        set((state) => {
            const existingItem = state.items.find((item) =>
            item.id === productId)
            if (existingItem &&existingItem.quantity > 1) {
                return{
                    items:state.items.map((item) =>
                    item.id === productId ? { ...item , quantity: item.quantity -1} : item)
                }
            }
            return {
                items:state.items.filter((item) => item.id !==
                productId)
            }
        })
    },
    // Полное удаление товара из корзины
    removeFromCart:(productId) => {
        set((state) => ({
            items: state.items.filter((item) => item.id !== productId)
        }))
    },
    // Очистить всю корзину
    clearCart:() => set ({items:[]}),
    // Общее количество товаров для кружка в шапке
    getTotalItems:() => {
        return get().items.reduce((total,item) => total + item.quantity,0)
    },
    // Общая стоимость всех товаров
    getTotalPrice:() => {
        return get().items.reduce((total,items) => total + items.price * items.quantity,0)
    }

}))