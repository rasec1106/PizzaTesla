import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toastType= "";
  toastMessage = "";
  toastIcon = "";
  
  constructor(
    public globalService: GlobalService
  ) {
    this.toastType = this.globalService.alertaGlobal.titulo;
    this.toastMessage = this.globalService.alertaGlobal.message;
    this.toastIcon = this.globalService.alertaGlobal.icono;
  }
}
