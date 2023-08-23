import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkProductGuard } from './check-product.guard';

describe('checkProductGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkProductGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
