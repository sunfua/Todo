import { Directive, HostBinding } from '@angular/core';
@Directive({
    selector: '.dropdown'
})
export class DropdownDirective {
    @HostBinding('class.show') private isOpen = false;
    constructor(){}
    toggleDropdown() { this.isOpen = !this.isOpen; }
}