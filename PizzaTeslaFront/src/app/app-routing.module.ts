import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'crud-products', component: CrudProductComponent },
  { path: 'form-products', component: FormProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
