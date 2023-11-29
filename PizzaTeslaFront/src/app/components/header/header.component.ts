import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  paginas = [
    { ruta: "", nombre: "Tienda" },
    { ruta: "/summary", nombre: "Resumen" },
    { ruta: "/payment", nombre: "Total a pagar" }
  ];

  constructor(
    public globalService: GlobalService,
    public router: Router
  ) { }

  getRouterActual(): string {
    switch (this.globalService.rutaActual) {
      case "/": return 'white';
      case "/summary": return 'brown';
      case "/payment": return '100%';
      default: return '1';

    }
  }
}
