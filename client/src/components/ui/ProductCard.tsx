import React from "react";
import {useCartStore} from "../../store/useCartStore.ts";

import type {Product} from "../types/products.ts";
import {Link} from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {

    const addToCart = useCartStore((state) => state.addToCart)

    return (
        <div className="group relative  flex flex-col  overflow-hidden rounded-xl border border-slate-800  bg-slate-800
        bg-slate-950 p-4 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-emerald-500/5">
            {/* Изображение */}
            <div
                className="aspect-square w-full overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center p-4">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full max-h-[160px] object-contain transition-transform
                duration-300 group-hover:scale-105"
                    />
                </Link>
            </div>
            {/* Инфо */}
            <div className="mt-4 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {product.brand}
                </span>
                <Link to={`/product/${product.id}`}>
                    <h3 className="mt-1 text-sm font-bold text-slate-200 line-clamp-2 min-h-[40px] ">
                        {product.title}
                    </h3>
                </Link>
                {/* Рейтинг */}
                <div className="mt-2 flex items-center gap-1 text-xs text-amber-400">
                    ⭐ <span>{product.rating}</span>
                </div>
                {/* Цена и кнопка */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-900">
                    <div className="flex flex-col">
                        {product.oldPrice && (<span className="text-xs text-slate-500 line-through">
                        {product.oldPrice.toLocaleString()}₽
                    </span>)}
                        <span className="text-base font-black text-white">
                    {product.price.toLocaleString()} ₽
                </span>
                    </div>
                    <button onClick={() => addToCart(product)}
                            className='rounded-lg bg-emerald-500 px-3 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-emerald-400 cursor-pointer '
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}




