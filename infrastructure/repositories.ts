import { Product, Order } from '../domain/models';

// Simulated database
const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Hamburguesa Master',
        description: 'Carne premium, queso cheddar y papas.',
        price: 22900,
        currency: 'COP',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNC2QaoP5-ZgMVEZbt0h3ea9tgENrZXMHam8EFmDNVxBs1S0LJIAlHPfEbow-jgR0YInV8ojOFXcK3SLfXVa5xnvE-kZs2prwVskM4YgORDaJ7gfV6c0t2hVYOLZlvyGQ5t2hhwMlYEhO_o4cbDmHZf8XHYONZeI4suvaXlZ3EclnroYS7QzSz6hX26QeBeRP62OdswzV8IPS0GgPTFljksW90IWbJ0FlCnE_-q565sWey888Q4clxEO4Dklkm0IWo-JYohd97YTnn',
        isComboOfTheDay: true,
        isAvailable: true,
        stock: 42,
        category: 'Combos'
    },
    {
        id: '2',
        name: 'Bowl Energético',
        description: 'Quinoa, pollo grillé y vegetales frescos.',
        price: 18500,
        currency: 'COP',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSTcjgFUvLk7coid9LfIXJ_anZO4cuWuIc4u6GoY7cLtO0HugeMVsZFRSTwrOaKpSuuRFzJepyK6gseK7x-Pdc5UlqM7qzVx4VxVhGSfTGNZXqmKP5FnIECHe6DmZx-mzXjmnwHu3myPKDvQp9DktLEyPRvUIda2wTmUT8T71N6UE8Xw7Ch2YVWChZZNRkLJIs2CByLFyqVSck4imGk3W_yzFM2SxlMrJH1Dgng5YDsiPxR6ImnyIEFrHbEFEbwBzqfWV_Ar1bgkfb',
        isAvailable: true,
        stock: 15,
        category: 'Snacks'
    },
    {
        id: '3',
        name: 'Pasta del Día',
        description: 'Agotado temporalmente',
        price: 15000,
        currency: 'COP',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuYjdpctvOvWA6vtW2ACxD0gVJTPvb-J_x_Qv6Mi5xFFodRINelivC5Kirigcbbr_CIxzqxNLHDFO4AZKOugI8xVtYSKRAXqPTPW57xTAV-AUhtJaXWTbope7TdxWWWMsaMu_GLPjKjHf0Y-_6-JuYoxtzG6sUbhPGFRpMQ8Xfh4JQUpRdkjFMr0zbJ_sPXHjf2BRHxhHf2V1nVJnWZYfF5W7TmxkbvxfPGUeKGIMLU0hluCaaq08x264F2wfdTcpiHGKbWeuy6H48',
        isAvailable: false,
        stock: 0,
        category: 'Todos'
    }
];

const mockOrders: Order[] = [
    {
        id: '342',
        customerName: 'Juan Perez',
        customerRole: 'Estudiante',
        items: [
            { productId: '1', name: 'Hamburguesa Especial', quantity: 1, price: 22900 },
            { productId: '4', name: 'Coca-Cola Zero', quantity: 1, price: 1600 }
        ],
        total: 24500,
        currency: 'COP',
        status: 'PREPARANDO',
        createdAt: new Date()
    },
    {
        id: '343',
        customerName: 'Maria Garcia',
        customerRole: 'Docente',
        items: [
            { productId: '5', name: 'Ensalada Cesar', quantity: 2, price: 15000 },
            { productId: '6', name: 'Jugo Natural', quantity: 2, price: 4100 }
        ],
        total: 38200,
        currency: 'COP',
        status: 'LISTO',
        createdAt: new Date()
    },
    {
        id: '341',
        customerName: 'Carlos Ruiz',
        customerRole: 'Estudiante',
        items: [
            { productId: '7', name: 'Combo Wrap Pollo', quantity: 1, price: 18000 }
        ],
        total: 18000,
        currency: 'COP',
        status: 'ENTREGADO',
        createdAt: new Date(),
        completedAt: new Date()
    }
];

export class ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        return mockProducts;
    }
    
    async getProductById(id: string): Promise<Product | undefined> {
        return mockProducts.find(p => p.id === id);
    }
}

export class OrderRepository {
    async getActiveOrders(): Promise<Order[]> {
        return mockOrders.filter(o => o.status !== 'ENTREGADO');
    }
    
    async getRecentCompletedOrders(): Promise<Order[]> {
        return mockOrders.filter(o => o.status === 'ENTREGADO');
    }
    
    async getOrderById(id: string): Promise<Order | undefined> {
        return mockOrders.find(o => o.id === id);
    }
}
