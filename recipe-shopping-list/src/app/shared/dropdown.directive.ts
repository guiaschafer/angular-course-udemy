import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elemRef: ElementRef,
        private renderer: Renderer2) {
    }

    @HostListener('document:click', ['$event']) onClick(eventData: Event) {
        this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

}