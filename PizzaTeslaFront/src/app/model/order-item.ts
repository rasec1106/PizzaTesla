import { Product } from "./product"

export class OrderItem {
    orderItemId?: number
    product? : Product
    quantity? : number
    discount? : number
    subtotal? : number
    orderId? : number
}
