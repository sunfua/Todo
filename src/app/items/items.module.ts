import { SpinnerComponent } from './../spinner/spinner.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsService } from './items.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsManagerComponent } from './items-manager/items-manager.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,    
  ],
  declarations: [ItemsManagerComponent,SpinnerComponent],
  providers: [ItemsService],
  exports: [ItemsManagerComponent,SpinnerComponent]
})
export class ItemsModule { }
