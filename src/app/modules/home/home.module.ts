import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from 'src/app/modules/home/pages/cart/cart.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ProductDetailComponent } from 'src/app/modules/home/pages/product-detail/product-detail.component';


@NgModule({
  declarations: [
    CartComponent,
    HomeComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    InputTextModule,
    TableModule,
    ToastModule,
    SharedModule,
  ],
  providers: []
})
export class HomeModule { }
