import { ItemsManagerComponent } from './items-manager/items-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const itemsRoutes: Routes = [
    {
        path: 'items',
        component: ItemsManagerComponent
    },
    // {
    //      path: '',
    //      redirectTo: '/items',
    //      pathMatch: 'full'
    // }
];

@NgModule({
  imports: [
    RouterModule.forChild(itemsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }