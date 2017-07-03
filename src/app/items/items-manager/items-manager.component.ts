import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-manager',
  templateUrl: './items-manager.component.html',
  styleUrls: ['./items-manager.component.css']
})
export class ItemsManagerComponent implements OnInit {
  componentName: string = 'Items Manager';
  itemcode: string = 'el650088559vn';//'RC653870288VN';//
  items:any;
  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getItem(this.itemcode).subscribe(data => this.items = data);
    console.log('init');
  }

}
