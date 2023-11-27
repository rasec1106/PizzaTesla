import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor(public globalService: GlobalService, public router: Router) { }
  ngOnInit(): void {
   this.globalService.rutaActual = this.router.url;
  }

  btnApariencia() {
   this.globalService.ordenarApariencia();
  }

  eliminarDePedido(productId :any) {
   this.globalService.eliminarProductPedido(productId);
  }
}
