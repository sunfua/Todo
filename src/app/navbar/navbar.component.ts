import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)':'closeAll()'
  }
})
export class NavbarComponent implements OnInit {
  menuIsOpen = false;
  dropdownIsOpen = false;

  constructor() { }
  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
  ngOnInit() {
  }

  toggleMenu(e:Event){
    let bool = this.menuIsOpen;
    this.menuIsOpen = bool===false?true:false;
    e.stopPropagation();
  }

  toggleDropdown(e:Event) {
    let bool = this.dropdownIsOpen;
    this.dropdownIsOpen=bool===false?true:false;
    e.stopPropagation();    
  }

  closeAll(){
    setTimeout(()=> {
      this.dropdownIsOpen = false;
      this.menuIsOpen = false;
    },200);
  }
}
