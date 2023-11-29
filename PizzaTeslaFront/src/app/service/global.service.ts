import { Injectable, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnInit{

  // ********** Propiedades
  categories: Category[] = [];
  logo_img: string = "https://res.cloudinary.com/djsl4a5py/image/upload/v1687332576/PizzaTesla/Logo/Frame_37Logo_1_avg1nu.png";
  productsGlobal: Product[] = [];

  // Seleccion de Categoria
  public categorySelect: Category = new Category();
  public rutaActual = this.router.url;
  public habilitarModel: boolean = false;
  public productSelected: any = {};

  public pedidos: any[] = []
  public apariencia: boolean = false;
  public isLoading: boolean = false;
  public productBtnSelect: boolean = false;
  public activeModalProduct: boolean = false;
  public products : Product[] = [];
  public crudSelected : Product = {};

  // Iconos para alerta
  public iconosAlerta = [
    "https://res.cloudinary.com/djsl4a5py/image/upload/v1687740263/PizzaTesla/Iconos/cheque-removebg-preview_dwbl7i.png",
    "https://res.cloudinary.com/djsl4a5py/image/upload/v1687740263/PizzaTesla/Iconos/signo-de-exclamacion-removebg-preview_slll3y.png",
    "https://res.cloudinary.com/djsl4a5py/image/upload/v1687740263/PizzaTesla/Iconos/alerta-removebg-preview_wkggho.png"
  ]
  public alertaGlobal = {
    titulo: "",
    message: "",
    icono: ""
  };

  constructor(
    private router: Router,
    private categorySrv: CategoryService,
    private productSrv: ProductService
  ) {
    this.categorySrv.getCategories().subscribe(result => this.categories = result);
    this.categorySrv.getCategories().subscribe(result => {
      this.categorySelect = result[0];
      this.buildCategoryByProducto(result[0].categoryId);
    });
    this.productSrv.getProducts().subscribe(result => this.products = result);
   }

   // ********** Metodos
  ngOnInit(): void {

  }

  setProductSelected(product: {}) {
    this.productSelected = product;
    this.habilitarModel = true;
  }

  deshabilitarModel() {
    this.habilitarModel = false;
    this.productSelected = {};
  }

  formatearDinero(dinero: any) {
    const options = {
      style: "currency",
      currency: "PEN"
    }
    return dinero.toLocaleString("es-PE", options)
  }

  setCategorySelect(value: Category): void {
    this.router.navigate(['/']);
    this.categorySelect = value;
  }

  buildCategoryByProducto(category: any) {
    this.productSrv.getProductByCategory(category).subscribe(
      result => this.productsGlobal = result
    );
  }

  agregarAlPedido(product: Product) {
    if (this.pedidos.some(p => p.id == product.productId)) {
      const pedidosActualizados = this.pedidos.map(p => p.id == product.productId ? product : p);
      this.pedidos = pedidosActualizados;
      this.toastAlert("Modificar","Producto actualizado",1);
    } else {
      this.pedidos = [...this.pedidos, product];
     this.toastAlert("Correcto","Producto Agregado",0);
    }
    this.deshabilitarModel();

  }

  ordenarApariencia() {
    this.apariencia = !this.apariencia;
  }

  totalAPagar() {
    return this.formatearDinero(this.pedidos.reduce((total, product) => total += (product.price * product.cantidad), 0));
  }

  eliminarProductPedido(productId: any) {
    const pedidosActualizados = this.pedidos.filter(p => p.id != productId);
    this.pedidos = pedidosActualizados;
    this.toastAlert("Eliminar","Producto eliminado",2);

  }

  numeroAleatorio() {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).split(".")[1];
    return fecha + random;
  }

  setIsLoader(valor: boolean) {
    this.isLoading = valor;
  }

  cleanReset() {
    this.categorySelect = new Category();
    this.productSelected = {};
    this.pedidos = [];
    this.router.navigate(['']);
    this.apariencia = false;
    this.categorySrv.getCategories().subscribe(result => {
      this.categorySelect = result[0];
      this.buildCategoryByProducto(result[0].categoryId);
    });
  }


  getProductBtnSelect(id: any) {
    return this.pedidos.some(p => p.id == id);
  }


  toastAlert(titulo:any, message:string, indicador:number) {
    this.alertaGlobal = {
      titulo,
      message,
      icono: this.iconosAlerta[indicador]
    }

    setTimeout(() => {
      this.alertaGlobal = {
        titulo: "",
        message: "",
        icono: ""
      }
    }, 2000) 
  }

  setActiveModalProduct(valor : boolean) {
    this.activeModalProduct = valor;
  }
}
