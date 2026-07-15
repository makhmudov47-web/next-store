import React from "react";

export const Cart:React.FC = () => {
    return(
        <div className="py-12 text-center">
            <h2 className="text-3xl font-bold">Ваша корзина</h2>
            <p className="mt-4 text-slate-400">Здесь будут отображаться добавленные товары и кнопка оформления заказа.</p>
        </div>
    )
}