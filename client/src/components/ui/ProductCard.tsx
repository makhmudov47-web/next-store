import React from "react";

import type {Product} from "../types/products.ts";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return (
        <div className="group relative  flex flex-col  overflow-hidden rounded-xl border border-slate-800  bg-slate-800
        bg-slate-950 p-4 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-emerald-500/5">
            {/* Изображение */}
            <div
                className="aspect-square w-full overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center p-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full max-h-[160px] object-contain transition-transform
                duration-300 group-hover:scale-105"
                />
            </div>
            {/* Инфо */}
            <div className="mt-4 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {product.brand}
                </span>
                <h3 className="mt-1 text-sm font-bold text-slate-200 line-clamp-2 min-h-[40px] ">
                    {product.title}
                </h3>
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
                    <button>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}

