import { Order } from "./order";
import { OrderItem } from "./order-item";

export class OrderRequest {
    order?: Order
    orderItems?: OrderItem[]
}
