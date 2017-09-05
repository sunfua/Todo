import { SpinnerComponent } from './../../spinner/spinner.component';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-trace', 
  entryComponents: [SpinnerComponent],
  templateUrl: './items-trace.component.html',
  styleUrls: ['./items-trace.component.css'],
})
export class ItemsTraceComponent implements OnInit {
  componentName: string = 'Trace Items Manager';
  itemcode: string = '';//'RC653870288VN';//
  items:any;
  public isRequesting: boolean;

  constructor(private itemService: ItemsService) { }

  trace(itemcode: string){
    if(itemcode && itemcode!==this.itemcode && itemcode.length==13){
      this.isRequesting = true;
      this.itemcode=itemcode;
      this.itemService.getItem(this.itemcode)
        .subscribe(data => this.items = data,
                  ()=>this.stopRefreshing(),
                  ()=>this.stopRefreshing());    
      console.log('IF: '+this.isRequesting);  
    }
    console.log(this.isRequesting);
  }

  private stopRefreshing() {
      this.isRequesting = false;
  }

  traceStatus(itemcode:string){
    // dang fix login
  }

  ngOnInit() {
  }

}
