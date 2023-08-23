import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { CartService } from 'src/app/core/services/cart.service';
import { MessageService } from 'primeng/api';

export const checkProductGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cartService = inject(CartService);
  const messageService = inject(MessageService);

  if (cartService.cartProducts$.getValue().length === 0) {
    messageService.add({ severity: 'info', detail: 'Product must be in cart.', life: 1000 });
    router.navigate(['/']);
    return false;
  }
  return true;
};
