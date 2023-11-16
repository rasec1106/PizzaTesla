import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import { ListProductComponent } from './components/crud-product/list-product/list-product.component';
import { ModalProductComponent } from './components/crud-product/modal-product/modal-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ShopComponent } from './components/shop/shop.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ToastComponent } from './components/toast/toast.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudProductComponent,
    ListProductComponent,
    ModalProductComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    ModalComponent,
    PaymentComponent,
    ShopComponent,
    SidebarComponent,
    SummaryComponent,
    ToastComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
