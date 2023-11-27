import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { GlobalService } from 'src/app/service/global.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  @Input() products! : Product[]; 
  
  constructor(
    public globalService: GlobalService, 
    private productSrv: ProductService,
    ) {

  }

  productSelected(product : Product) {
    this.globalService.setActiveModalProduct(true);
    this.globalService.crudSelected = product;
  }

  deleteProduct(id: any) {
    // this.productSrv.deleteProduct(parseInt(id)).subscribe();
  }
}
