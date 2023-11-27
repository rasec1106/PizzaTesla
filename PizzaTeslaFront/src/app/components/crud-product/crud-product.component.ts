import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { GlobalService } from 'src/app/service/global.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit{
  products: Product[] = [];
  product: Product = {
  };
  habilitarModal : boolean = false;
  
  constructor(
    
    private productService: ProductService,
    public globalService: GlobalService
    ) { 
      
    }

  ngOnInit() {
    this.getProducts();
    
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

 

  updateProduct() {
    // Implementa la lógica para actualizar un producto
  }

}
