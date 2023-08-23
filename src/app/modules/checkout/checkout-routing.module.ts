import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkProductGuard } from 'src/app/core/guards/check-product.guard';

import { CheckoutComponent } from 'src/app/modules/checkout/checkout.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  { path: '', canActivate:[checkProductGuard], component: CheckoutComponent },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
