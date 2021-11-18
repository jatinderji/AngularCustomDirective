//  Need to import ElementRef
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColorDirective]'
})
export class RedColorDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "blue";
    el.nativeElement.style.fontWeight = "bold";
   }

}
