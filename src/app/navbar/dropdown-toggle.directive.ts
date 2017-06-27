import { DropdownDirective } from './dropdown.directive';
import { Directive, HostListener } from '@angular/core';
@Directive({
    selector: '.nav-link.dropdown-toggle'
})
export class DropdownToggleDirective {
    constructor(private dropdown: DropdownDirective) {}
    @HostListener('click',['$event']) onClick($event: any) {
        $event.preventDefault();
        this.dropdown.toggleDropdown();
    }
}