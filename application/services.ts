import { ProductRepository, OrderRepository } from '../infrastructure/repositories';
import { Product, Order } from '../domain/models';

export class CatalogService {
    private repo: ProductRepository;

    constructor() {
        this.repo = new ProductRepository();
    }

    async getMenu(): Promise<Product[]> {
        return this.repo.getAllProducts();
    }
}

export class DispatchService {
    private orderRepo: OrderRepository;

    constructor() {
        this.orderRepo = new OrderRepository();
    }

    async getDashboardData() {
        const activeOrders = await this.orderRepo.getActiveOrders();
        const completedOrders = await this.orderRepo.getRecentCompletedOrders();
        
        return {
            activeOrders,
            completedOrders,
            stats: {
                dailySales: 4820000,
                salesGrowth: '+12%',
                ordersToday: 142,
                avgTime: '8.5 min'
            }
        };
    }
    
    async getCurrentUserOrder(orderId: string): Promise<Order | undefined> {
        return this.orderRepo.getOrderById(orderId);
    }
}
