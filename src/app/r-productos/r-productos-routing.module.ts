import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RProductosPage } from './r-productos.page';

const routes: Routes = [
  {
    path: '',
    component: RProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RProductosPageRoutingModule {}
