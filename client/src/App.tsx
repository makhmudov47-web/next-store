import {Layout} from "./components/layout/Layout.tsx";
import type {Product} from "./components/types/products.ts";
import {ProductCard} from "./components/ui/ProductCard.tsx";


// Временный массив данных (Mock data)
const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'Смартфон Apple iPhone 15 Pro 128GB',
        description: 'Флагманский смартфон с титановым корпусом и мощным процессором A17 Pro.',
        price: 115000,
        oldPrice: 130000,
        brand: 'Apple',
        category: 'telephones',
        rating: 4.9,
        image: 'https://img.imagesia.com/files/1/iphone-15-pro.png' // Используем пока любую заглушку, можно заменить
    },
    {
        id: '2',
        title: 'Игровая приставка Sony PlayStation 5 Slim',
        description: 'Обновленная тонкая версия культовой консоли с накопителем на 1 ТБ.',
        price: 55000,
        brand: 'Sony',
        category: 'consoles',
        rating: 4.8,
        image: 'https://img.imagesia.com/files/1/ps5.png'
    },
    {
        id: '3',
        title: 'Беспроводные наушники Apple AirPods Max',
        description: 'Полноразмерные наушники с активным шумоподавлением и великолепным звуком.',
        price: 65000,
        oldPrice: 72000,
        brand: 'Apple',
        category: 'headphones',
        rating: 4.7,
        image: 'https://img.imagesia.com/files/1/airpods-max.png'
    },
    {
        id: '4',
        title: 'Игровой монитор ASUS ROG Swift 27"',
        description: 'OLED-монитор с частотой обновления 240 Гц и мгновенным откликом.',
        price: 98000,
        brand: 'ASUS',
        category: 'monitors',
        rating: 4.9,
        image: 'https://img.imagesia.com/files/1/monitor.png'
    }
];

function App() {
    return (
        <Layout>
            {/* Промо-баннер */}
            <div className="relative overflow-hidden rounded-2xl  bg-linear-to-r from-slate-950 to-slate-800 p-8 md:p-12
            border border-slate-800 mb-12">
                <div className="max-w-md">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                        Летняя распродажа
                    </span>
                    <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl text-white">Новый уровень
                        технологий</h2>

                    <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                        Успей обновить свой сетап со скидками до 20%. Только оригинальная техника с официальной
                        гарантией.
                    </p>
                </div>
            </div>

            {/* Сетка товаров */}
            <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    🔥 Популярные товары
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-22 md:grid-cols-3 lg:grid-cols-4">
                    {MOCK_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default App;