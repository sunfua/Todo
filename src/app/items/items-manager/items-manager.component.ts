import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-manager',
  templateUrl: './items-manager.component.html',
  styleUrls: ['./items-manager.component.css']
})
export class ItemsManagerComponent implements OnInit {
  componentName: string = 'Items Manager';
  constructor() { }

  ngOnInit() {
    console.log('init');
  }

}
