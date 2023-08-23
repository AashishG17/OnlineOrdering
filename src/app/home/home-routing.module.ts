import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from 'src/app/home/pages/cart/cart.component';
import { CheckoutComponent } from 'src/app/home/pages/checkout/checkout.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductDetailComponent } from 'src/app/home/pages/product-detail/product-detail.component';
import { checkProductGuard } from 'src/app/core/guards/check-product.guard';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', canActivate:[checkProductGuard], component: CheckoutComponent },
  { path: 'review', component: ReviewComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
