import { ItemsRoutingModule } from './items-routing.module';
import { ItemsService } from './items.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsManagerComponent } from './items-manager/items-manager.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsManagerComponent],
  providers: [ItemsService],
  exports: [ItemsManagerComponent]
})
export class ItemsModule { }
