import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-trace',
  templateUrl: './items-trace.component.html',
  styleUrls: ['./items-trace.component.css']
})
export class ItemsTraceComponent implements OnInit {
  componentName: string = 'Trace Items Manager';
  itemcode: string = '';//'RC653870288VN';//
  items:any;
  constructor(private itemService: ItemsService) { }

  trace(itemcode: string){
    if(itemcode && itemcode!==this.itemcode && itemcode.length==13){  
      this.itemcode=itemcode 
      this.itemService.getItem(this.itemcode).subscribe(data => this.items = data);
    }
  }

  ngOnInit() {
  }

}
