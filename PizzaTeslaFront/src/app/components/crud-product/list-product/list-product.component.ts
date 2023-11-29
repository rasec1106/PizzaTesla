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
      this.productSrv.getProducts().subscribe(res=>{
        this.globalService.products = res
        this.products=res
      })
  }

  productSelected(product : Product) {
    this.globalService.setActiveModalProduct(true);
    this.globalService.crudSelected = product;
  }

  deleteProduct(product: Product) {
    this.productSrv.deleteProduct(product.productId).subscribe();
    this.productSrv.getProducts().subscribe(res=>{
      this.globalService.products = res
      this.products = res
    })
    window.location.reload()
  }

  getCategoryName(categoryId: number): string {
    return this.globalService.categories.find(c=>c.categoryId === categoryId)?.name || 'Unknown'; // Provide a default value if category not found
  }
}
