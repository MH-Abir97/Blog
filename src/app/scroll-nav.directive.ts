import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollNav]'
})
export class ScrollNavDirective {
  @HostBinding('class.new-nav') newNav! : boolean;
  constructor() {

   }

   @HostListener('window:scroll')onScroll(){
    if(window.scrollY >= 50){
      this.newNav=true;
    }else{
      this.newNav=false;
    }

   }

}


