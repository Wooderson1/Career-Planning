import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRolesPageRoutingModule } from './search-roles-routing.module';

import { SearchRolesPage } from './search-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRolesPageRoutingModule
  ],
  declarations: [SearchRolesPage]
})
export class SearchRolesPageModule {}
