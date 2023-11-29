import { Component } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Propiedades
  categories: Category[] = [];
  constructor(
    public globalService: GlobalService,
    public categorySrv: CategoryService,
  ) {
    this.categorySrv.getCategories().subscribe(res => {
      this.categories = res;
    });

  }
  setCategorySelected(category: Category) {
    this.globalService.setCategorySelect(category);
    this.globalService.buildCategoryByProducto(category.categoryId!);
  }
}
