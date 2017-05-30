import { StyleCellDirective } from './style-cell.directive';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import { FormatCellPipe } from './format-cell.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [TableLayoutComponent, FormatCellPipe, StyleCellDirective],
    exports: [ CommonModule, TableLayoutComponent ],
    providers: [CurrencyPipe]
})
export class SharedModule {}