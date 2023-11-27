import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  selectionProduct: Product = {};
  cantidad : any = 1;
  ingredients : any = [];
  constructor(
    public globalService: GlobalService
  ) {
    this.selectionProduct = this.globalService.productSelected;
    this.ingredients = this.selectionProduct.ingredients?.split(", ");
    this.ajustarCantidad();
  }


  cantidadUp() {
    if(this.cantidad == 5) {
      return;
    }
    this.cantidad += 1;
  }

  cantidadDown() {
    if(this.cantidad == 1) {
      return;
    }
    this.cantidad -= 1;
  }

  addPedido() {
    const productPedido = {
      ...this.selectionProduct,
      cantidad: this.cantidad
    }
    this.globalService.agregarAlPedido(productPedido);
  }
  
  ajustarCantidad() {
    if(this.globalService.pedidos.some(p => p.id == this.selectionProduct.id)) {
      const productFind = this.globalService.pedidos.find(p => p.id == this.selectionProduct.id)
      this.cantidad = productFind.cantidad;
    }
  }
}
