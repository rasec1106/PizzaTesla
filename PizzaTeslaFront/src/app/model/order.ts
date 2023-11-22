import { OrderItem } from "./order-item"

export class Order {
    clienteId? : string
    nombreCliente? : string
    email? : string
    telefono? : string
    estado? : string
    direccionEntrega? : string
    fechaOrden? : string
    orderItems?:OrderItem[]
}
