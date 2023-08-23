import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './pages/review/review.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    CheckoutComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutModule { }
