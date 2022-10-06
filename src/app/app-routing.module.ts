import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./support/support.module').then((m) => m.SupportPageModule),
  },
  {
    path: 'outside-support',
    loadChildren: () =>
      import('./outside-support/outside-support.module').then(
        (m) => m.OutsideSupportPageModule
      ),
  },
  {
    path: 'search-roles',
    loadChildren: () =>
      import('./search-roles/search-roles.module').then(
        (m) => m.SearchRolesPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
