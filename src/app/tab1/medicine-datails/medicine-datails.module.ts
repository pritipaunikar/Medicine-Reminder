import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicineDatailsPageRoutingModule } from './medicine-datails-routing.module';

import { MedicineDatailsPage } from './medicine-datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicineDatailsPageRoutingModule
  ],
  declarations: [MedicineDatailsPage]
})
export class MedicineDatailsPageModule {}
