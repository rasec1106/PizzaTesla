import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from "@angular/core";

import { Product } from 'src/app/model/product';
import { GlobalService } from 'src/app/service/global.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-components-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  
  constructor(
    public globalService: GlobalService, 
    public router: Router,
    private productSrv : ProductService
    ) { 
      
    }

  ngOnInit(): void {
    this.globalService.rutaActual = this.router.url;
  }

  formatearDinero(dinero: number) {
    const options = {
      style: "currency",
      currency: "PEN"
    }
    return dinero.toLocaleString("es-PE", options)
  }
}
