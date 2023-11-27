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
        categoriaId: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        ingredients: ['', Validators.required],
        timePreparation: ['', Validators.required],
        imagen: ['', Validators.required]
      });
    }else {
      this.myForm = this.formBuilder.group({
        categoriaId: [this.product.categoriaId, Validators.required],
        name: [this.product.name, Validators.required],
        description: [this.product.description, Validators.required],
        price: [this.product.price, Validators.required],
        ingredients: [this.product.ingredients, Validators.required],
        timePreparation: [this.product.preparationTime, Validators.required],
        imagen: [this.product.imageUrl, Validators.required]
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

    this.productService.createProduct(this.myForm.value).subscribe(() => {
      // Volver a obtener la lista de productos actualizada
      this.productService.getProducts().subscribe(result => {
        this.globalService.products = result;
      });
    });
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
      categoriaId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      ingredients: ['', Validators.required],
      timePreparation: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }
}
