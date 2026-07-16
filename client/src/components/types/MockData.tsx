import type {Product} from "./products.ts";

export const MOCK_PRODUCTS:Product[] = [
    {
        id: '1',
        title: 'Смартфон Apple iPhone 15 Pro 128GB',
        description: 'Флагманский смартфон с титановым корпусом, невероятной камерой 48 Мп и мощнейшим процессором A17 Pro для консольного гейминга.',
        price: 115000,
        oldPrice: 130000,
        brand: 'Apple',
        category: 'telephones',
        rating: 4.9,
        image: 'https://img.imagesia.com/files/1/iphone-15-pro.png'
    },
    {
        id: '2',
        title: 'Игровая приставка Sony PlayStation 5 Slim',
        description: 'Обновленная более тонкая версия культовой консоли PlayStation 5. Быстрый SSD на 1 ТБ и поддержка трассировки лучей для реалистичной графики.',
        price: 55000,
        brand: 'Sony',
        category: 'consoles',
        rating: 4.8,
        image: 'https://img.imagesia.com/files/1/ps5.png'
    },
    {
        id: '3',
        title: 'Беспроводные наушники Apple AirPods Max',
        description: 'Полноразмерные наушники с активным шумоподавлением, режимом прозрачности, адаптивным эквалайзером и пространственным аудио.',
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
        description: 'Высококлассный OLED-монитор с частотой обновления 240 Гц, временем отклика 0.03 мс и потрясающей цветопередачей для профессиональных киберспортсменов.',
        price: 98000,
        brand: 'ASUS',
        category: 'monitors',
        rating: 4.9,
        image: 'https://img.imagesia.com/files/1/monitor.png'
    }
]

