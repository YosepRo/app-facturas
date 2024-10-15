import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RProductosPageRoutingModule } from './r-productos-routing.module';

import { RProductosPage } from './r-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RProductosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RProductosPage]
})
export class RProductosPageModule {}
