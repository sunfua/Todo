import { Component, Input, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';

@Component({
    selector: 'app-table',
    templateUrl: './table-layout.component.html'
})
export class TableLayoutComponent implements OnChanges{
    @Input() records: any[];
    @Input() caption: string;
    @Input() settings: ColumnSetting[];
    columnMaps: ColumnMap[];
    //keys: string[];
    ngOnChanges() {
        //this.keys=Object.keys(this.records[0]);
        if (this.settings) { //when settings provided
            this.columnMaps=this.settings.
                map(col=>new ColumnMap(col));
        }else { //no settings, creat column maps with defaults
            this.columnMaps=Object.keys(this.records[0]).
                map(key=>{
                    return new ColumnMap({primaryKey:key});
                });
        }
    }    
}