import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from 'src/app/modules/home/pages/cart/cart.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ProductDetailComponent } from 'src/app/modules/home/pages/product-detail/product-detail.component';
import { checkProductGuard } from 'src/app/core/guards/check-product.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
