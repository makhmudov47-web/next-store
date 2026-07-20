import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {MOCK_PRODUCTS} from "../types/MockData.tsx";
export const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Ищем товар по id
    const product = MOCK_PRODUCTS.find((p) => p.id === id);

    // Если товар вдруг не найден
    if (!product) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-3xl font-bold text-white">Товар не найден 😢</h2>
                <p className="mt-4 text-slate-400">Возможно, ссылка устарела или товара больше нет в наличии.</p>
                <Link to="/" className="mt-6 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-400 transition-colors">
                    Вернуться на главную
                </Link>
            </div>
        );
    }

    return (
        <div className="py-6">
            {/* Кнопка назад */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-8">
                ← Назад в каталог
            </Link>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Левая колонка: Изображение */}
                <div className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 p-8 min-h-100">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-85 w-auto object-contain"
                    />
                </div>

                {/* Правая колонка: Детали */}
                <div className="flex flex-col justify-between">
                    <div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              {product.brand}
            </span>
                        <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                            {product.title}
                        </h1>

                        {/* Рейтинг */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-amber-400">
                            ⭐ <span className="font-bold text-white">{product.rating}</span>
                            <span className="text-slate-500">|</span>
                            <span className="text-emerald-400 font-medium">В наличии</span>
                        </div>

                        {/* Описание */}
                        <p className="mt-6 text-base text-slate-400 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Блок покупки */}
                    <div className="mt-8 border-t border-slate-800 pt-6">
                        <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-black text-white">
                {product.price.toLocaleString()} ₽
              </span>
                            {product.oldPrice && (
                                <span className="text-lg text-slate-500 line-through">
                  {product.oldPrice.toLocaleString()} ₽
                </span>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 rounded-xl bg-emerald-500 py-4 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-400 cursor-pointer">
                                Добавить в корзину
                            </button>
                            <button className="rounded-xl border border-slate-700 px-6 py-4 text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
                                🤍
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};