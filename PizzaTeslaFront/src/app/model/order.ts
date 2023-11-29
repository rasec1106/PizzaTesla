import { OrderItem } from "./order-item"

export class Order {
    orderId? : number
    orderDate? : string
    productCost? : number
    deliveryCost? : number
    discount? : number
    totalAmount? : number
    clientName? : string
    clientPhone? : string
    clientEmail? : string
    clientAddress? : string
    orderItems?:OrderItem[]
}
