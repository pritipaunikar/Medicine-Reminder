import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineDatailsPage } from './medicine-datails.page';

const routes: Routes = [
  {
    path: '',
    component: MedicineDatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineDatailsPageRoutingModule {}
