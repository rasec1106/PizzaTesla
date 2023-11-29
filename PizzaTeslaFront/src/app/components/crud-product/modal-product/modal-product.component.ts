import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { GlobalService } from 'src/app/service/global.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent {
  myForm!: FormGroup;
  @Input() products!: Product[];
  categories: Category[] = [];
  product: Product = {};

  ngOnInit() {
    if (!this.product) {
      this.myForm = this.formBuilder.group({
        categoryId: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        ingredients: ['', Validators.required],
        preparationTime: ['', Validators.required],
        imageUrl: ['', Validators.required]
      });
    }else {
      this.myForm = this.formBuilder.group({
        productId: this.product.productId,
        categoryId: [this.product.categoryId, Validators.required],
        name: [this.product.name, Validators.required],
        description: [this.product.description, Validators.required],
        price: [this.product.price, Validators.required],
        ingredients: [this.product.ingredients, Validators.required],
        preparationTime: [this.product.preparationTime, Validators.required],
        imageUrl: [this.product.imageUrl, Validators.required]
      });
    }

  }

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    public globalService: GlobalService,
    private location: Location
  ) {
    this.categoryService.getCategories().subscribe(result => this.categories = result);
    this.product = this.globalService.crudSelected;
  }



  onSubmit() {
    if (this.myForm.valid) {
      // Aquí puedes realizar acciones cuando el formulario es válido
      console.log(this.myForm.value);
    }
  }

  createProduct() {
    if (this.myForm.invalid) {
      // Aquí puedes realizar acciones cuando el formulario es válido
      console.log("Error")
      return;
    }

    if (this.globalService.products.some(p => p.productId == this.product.productId)) {
      this.productService.updateProduct(this.myForm.value).subscribe(() => {
        // Volver a obtener la lista de productos actualizada
        this.productService.getProducts().subscribe(result => {
          this.globalService.products = result;
        });
        this.globalService.buildCategoryByProducto(this.product.categoryId!);
      });
    }else{
      this.productService.createProduct(this.myForm.value).subscribe(() => {
        // Volver a obtener la lista de productos actualizada
        this.productService.getProducts().subscribe(result => {
          this.globalService.products = result;
        });
        this.globalService.buildCategoryByProducto(this.product.categoryId!);
      });
    }
    this.product={}
    this.globalService.crudSelected = {};
    // Limpiar el formulario después de crear un producto
    this.desactivarModal();
    // Recargamos la pagina
    this.location.go(this.location.path());
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }


  desactivarModal() {
    this.globalService.setActiveModalProduct(false)
    this.limpiarFormulario();
  }

  limpiarFormulario() {

    this.myForm = this.formBuilder.group({
      categoryId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationTime: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }
}
