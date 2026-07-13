import * as React from "react";
import {Footer} from "./Footer.tsx";
import {Header} from "./Header.tsx";

interface LayOutProps {
    children:React.ReactNode;

}

export const Layout: React.FC<LayOutProps> = ({children}) => {
    return(
        <div className="flex min-h-screen flex-col bg-slate-900 text-white selection:bg-emerald-500
        selection:text-slate-950">
            <Header/>
            <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
            >{children}</main>
            <Footer/>

        </div>
    )
}