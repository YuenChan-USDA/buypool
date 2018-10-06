import 'rxjs/add/operator/switchMap';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';

import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private route: ActivatedRoute;
  private router: Router;
  private productService: ProductService;

  protected product: any

  constructor(protected injector: Injector) { 
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);   
    this.productService=injector.get(ProductService)  
  }

  ngOnInit() {
    this.route.paramMap.switchMap(param => {
      let id: string = param.get("id");
      return this.productService.getResourceById(id);         
  }).subscribe(product=>this.product=product)    
  }

}
