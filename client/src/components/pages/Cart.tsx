import React from "react";
import {useCartStore} from "../../store/useCartStore.ts";
import {Link} from "react-router-dom";

export const Cart:React.FC = () => {

    const {items, addToCart, decreaseQuantity, removeFromCart, clearCart, getTotalPrice } = useCartStore()
    // Если корзина пуста, показываем красивую заглушку
        if (items.length === 0) {
            return (
                <div className='py-20 text-center'>
                    <div className='text-6xl mb-6'>🛒</div>
                    <h2 className='text-3xl font-black text-white'>Ваша корзина пуста</h2>
                    <p className='mt-4 text-slate-400'>Но это легко исправить! Загляните в каталог за крутыми девайсами.</p>
                    <Link to='/' className='mt-8 inline-block rounded-xl bg-emerald-500 px-6 font-bold
                    text-slate-950 hover:bg-emerald-400 transition-colors'>
                        В каталог
                    </Link>


                </div>
            )
        }
    return(
        <div className="py-6">

        </div>
    )
}