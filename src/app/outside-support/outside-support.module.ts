import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutsideSupportPageRoutingModule } from './outside-support-routing.module';

import { OutsideSupportPage } from './outside-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutsideSupportPageRoutingModule
  ],
  declarations: [OutsideSupportPage]
})
export class OutsideSupportPageModule {}
