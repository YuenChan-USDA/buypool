import 'rxjs/add/operator/switchMap';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productId:string;

  private productService: ProductService;
  //protected productList$: Observable<any>;
  protected productList: any

  constructor(protected injector: Injector) { 
    this.productService=injector.get(ProductService)
  }

  ngOnInit() {
      this.productService.getResourceList().subscribe(pList=>this.productList=pList);
  }
}
