import {Layout} from "./components/layout/Layout.tsx";

function App() {
    return (
        <Layout>
            <div className="py-12 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    Добро пожаловать в <span className="text-emerald-400">TechStore</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                    Лучший магазин электроники, собранный на стеке React, TypeScript, Node.js и Docker. Начнем наполнять каталог!
                </p>
            </div>
        </Layout>
    )
}
export default App;