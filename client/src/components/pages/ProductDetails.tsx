import React from "react";
import {useParams} from "react-router-dom";

export const ProductDetails:React.FC = () => {
const {id} = useParams<{id:string}>()

    return(
        <div className="py-12 text-center">
            <h2 className="text-3xl font-bold">
                Страница товара #{id}
            </h2>
            <p className="mt-4 text-slate-400">
                Здесь будет подробное описание товара, характеристики и отзывы.
            </p>
        </div>
    )
}