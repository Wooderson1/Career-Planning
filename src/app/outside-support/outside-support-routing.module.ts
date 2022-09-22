import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutsideSupportPage } from './outside-support.page';

const routes: Routes = [
  {
    path: '',
    component: OutsideSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutsideSupportPageRoutingModule {}
