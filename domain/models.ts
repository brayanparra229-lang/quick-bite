export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
    isComboOfTheDay?: boolean;
    isAvailable: boolean;
    stock?: number;
    category?: string;
}

export interface OrderItem {
    productId: string;
    name: string;
    quantity: number;
    price: number;
}

export interface Order {
    id: string;
    customerName: string;
    customerRole: 'Estudiante' | 'Docente' | 'Admin';
    items: OrderItem[];
    total: number;
    currency: string;
    status: 'PENDIENTE' | 'PREPARANDO' | 'LISTO' | 'ENTREGADO';
    estimatedTime?: string;
    createdAt: Date;
    completedAt?: Date;
}
