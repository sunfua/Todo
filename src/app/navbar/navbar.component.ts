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
  dropdownIsOpen2 = false;
  dropdownIsOpen3 = false;

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
    this.dropdownIsOpen2=this.dropdownIsOpen3=false;
    e.stopPropagation();    
  }

  toggleDropdown2(e:Event) {
    let bool = this.dropdownIsOpen2;
    this.dropdownIsOpen2=bool===false?true:false;
    this.dropdownIsOpen=this.dropdownIsOpen3=false;
    e.stopPropagation();    
  }

  toggleDropdown3(e:Event) {
    let bool = this.dropdownIsOpen3;
    this.dropdownIsOpen3=bool===false?true:false;
    this.dropdownIsOpen=this.dropdownIsOpen2=false;
    e.stopPropagation();    
  }

  closeAll(){
    setTimeout(()=> {
      this.dropdownIsOpen=this.dropdownIsOpen2=this.dropdownIsOpen3=false;
      this.menuIsOpen = false;
    },200);
  }
}
