import React from "react";

import type {Product} from "../types/products.ts";

interface ProductCardProps {
    product:Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return(
        <div className="group relative  flex flex-col  overflow-hidden rounded-xl border border-slate-800  bg-slate-800
        bg-slate-950 p-4 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-emerald-500/5">
            {/* Изображение */}
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center p-4">
                <img
                src={product.image}
                alt={product.title}
                className="h-full max-h-[160px] object-contain transition-transform
                duration-300 group-hover:scale-105"
                />
            </div>
            {/* Инфо */}
        </div>
    )
}