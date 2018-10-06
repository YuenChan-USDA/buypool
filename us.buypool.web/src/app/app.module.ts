import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProductService } from './services/product.service';
import { HomeComponent } from './components/home/home.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,  
    BrowserModule,
    AppRoutingModule    
  ],  
  declarations: [
    AppComponent,
    HomeComponent
  ],
  
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
