import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm: FormGroup

  constructor(
    public globalService: GlobalService,
    public router: Router,
    public orderService: OrderService,
  ) {

    this.paymentForm = new FormGroup({
      // Definición de los controles del formulario
      nombreCliente: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      direccionEntrega: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.globalService.rutaActual = this.router.url;
  }


  enviarPedido() {

    if (this.paymentForm.invalid) {
      this.globalService.toastAlert("Error", "Todos los campos son obligatorios", 2);
      return;
    }
    else if (this.globalService.pedidos.length == 0) {
      this.globalService.toastAlert("Error", "No tienes un pedido para pagar", 2);
      return;
    } else {
      this.globalService.setIsLoader(true);

      const clienteId = this.globalService.numeroAleatorio();
      const fechaOrden = Date.now().toString();
      const estado = "Pendiente";
      const pedidoAdaptado = this.globalService.pedidos.map(product => {
        return {
          pizzaId: product.id,
          nombrePizza: product.name,
          precioUnitario: product.price,
          cantidad: product.cantidad,
          subTotal: (product.price * product.cantidad)
        }
      });
      this.paymentForm.value.clienteId = clienteId;
      this.paymentForm.value.fechaOrden = fechaOrden;
      this.paymentForm.value.estado = estado;
      this.paymentForm.value.ordenItems = pedidoAdaptado;

      this.orderService.createOrder(this.paymentForm.value).subscribe();
      this.globalService.cleanReset();
      this.limpiarFormulario();
      setTimeout(() => {
        this.globalService.setIsLoader(false);
        this.globalService.toastAlert("¡Felicidades!", "Pedido agregado", 0);

      }, 2000);
    }

  }

  limpiarFormulario() {
    this.paymentForm = new FormGroup({
      // Definición de los controles del formulario
      nombreCliente: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      direccionEntrega: new FormControl('', Validators.required)
    });
  }
}
