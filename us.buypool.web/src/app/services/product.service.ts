import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Servicebase } from './servicebase';

@Injectable()
export class ProductService extends Servicebase  {
    constructor(protected http: HttpClient) {
        super("Product",http);
    }
}
