import React from "react";
import {Link} from "react-router-dom";
import {useCartStore} from "../../store/useCartStore.ts";

export const Header: React.FC = () => {
    const totalItems = useCartStore((state) => state.getTotalItems())
    return (
        <header className=" sticky top-0 z-50 w-full border-b
     border-slate-800 bg-slate-900/95 text-white backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Логотип */}
                <Link to='/' className="flex items-center gap-2">
                    <span
                        className="text-2xl font-black tracking-tight bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        TECH<span className="text-white">STORE</span>
                    </span>
                </Link>
                {/* Будущий поиск */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <input
                        type="text"
                        placeholder="Поиск электроники..."
                        className="w-full rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200 placeholder-slate-400
                outline-none border border-transparent focus:border-emerald-500 transition-all"
                    />
                </div>
                {/* Навигация / Иконки */}
                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="#catacolog" className="hover:text-emerald-400 transition-colors">Каталог</a>
                    <a href="#favorites" className="relative hover:text-emerald-400 transition-colors">Избранное</a>
                    <Link to='/cart'
                       className="relative bg-emerald-500
                   hover:bg-emerald-600 px-4 py-2 rounded-lg
                   font-semibold transition-colors flex items-center gap-2 text-slate-950">
                        Корзина
                        { totalItems > 0 && (<span className="bg-slate-950 text-emerald-400
                    text-xs px-1.5 py-0.5 rounded-full font-bold">
                            {totalItems}
                        </span>)}</Link>
                </div>
            </div>


        </header>
    )
}

