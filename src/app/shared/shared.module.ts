import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ItemComponent } from 'src/app/shared/components/item/item.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
  ],
  exports: [
    HeaderComponent,
    ItemComponent,
  ],
  providers: [MessageService]
})
export class SharedModule { }
