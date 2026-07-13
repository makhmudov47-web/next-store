import * as React from "react";

export const Footer: React.FC = () => {
    // @ts-ignore
    return (
        <footer className="w-full border-t border-r-slate-800 bg-slate-950 text-slate-400 py-8">
            <div
                className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p className="text-sm">
                        {new Date().getFullYear()}  TechStore. Все права защищены.
                    </p>
                </div>
                <div className="flex gap-6 text-sm" >
                    <a href="#terms" className="hover:text-white transition-colors">Условия использования</a>
                    <a href="#privacy" className="hover:text-white transition-colors">Конфиденциальность</a>
                    <a href="#support" className="hover:text-white transition-colors">Поддержка</a>

                </div>
            </div>
        </footer>
    )
}