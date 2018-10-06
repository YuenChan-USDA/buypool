import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent }       from './components/home/home.component';
import { PageNotFoundComponent }       from './components/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent
      },    
    {
      path: 'product-detail/:id',
      component: ProductDetailComponent
    },
    { 
      path: '**', 
      component: PageNotFoundComponent 
    }
];

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
        }
      )
    ],
    declarations: [
      PageNotFoundComponent,
      ProductListComponent,
      ProductDetailComponent
    ],
    exports: [
      RouterModule,ProductListComponent
    ]
})
export class AppRoutingModule {
}
