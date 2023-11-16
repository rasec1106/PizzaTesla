import { Component } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(public globalService: GlobalService) { }
}
