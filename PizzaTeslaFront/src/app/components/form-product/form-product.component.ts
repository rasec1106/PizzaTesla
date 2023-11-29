import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { GlobalService } from 'src/app/service/global.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{

  @Input() products!: Product[];
  myForm!: FormGroup;
  categories: Category[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    public globalService: GlobalService,
    private location: Location
  ) {
    this.categoryService.getCategories().subscribe(result => this.categories = result);
  }

  ngOnInit() {
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
    console.log(this.myForm.value);
    this.productService.createProduct(this.myForm.value).subscribe(() => {
      // Volver a obtener la lista de productos actualizada
      this.getProducts();
    });
    // Limpiar el formulario después de crear un producto
    this.desactivarModal() ;
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
  volverListado() {

  }
}
