import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from 'src/app/home/pages/cart/cart.component';
import { CheckoutComponent } from 'src/app/home/pages/checkout/checkout.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductDetailComponent } from 'src/app/home/pages/product-detail/product-detail.component';
import { ReviewComponent } from './pages/review/review.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductDetailComponent,
    ReviewComponent,
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
