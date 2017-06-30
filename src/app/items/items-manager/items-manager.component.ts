import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-manager',
  templateUrl: './items-manager.component.html',
  styleUrls: ['./items-manager.component.css']
})
export class ItemsManagerComponent implements OnInit {
  componentName: string = 'Items Manager';
  itemcode: string ='el650088559vn';
  item: any;
  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getItem(this.itemcode).subscribe(data => this.item = data);
    console.log('init');
  }

}
