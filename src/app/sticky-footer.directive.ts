import { Directive, OnInit, HostListener, ElementRef, Renderer, Renderer2, AfterViewInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStickyFooter]'
})
export class StickyFooterDirective implements OnInit, AfterViewInit, OnChanges {
  private readonly className = 'sticky-footer';
  constructor(private readonly render2: Renderer2,
  private readonly elementRef: ElementRef) { }

  ngOnInit() { 
    const htmlElement: HTMLElement = this.elementRef.nativeElement.children[0];
    this.render2.addClass(htmlElement,this.className);
   }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    const htmlElement: HTMLElement = this.elementRef.nativeElement.children[0];
  //    if (window.pageYOffset > htmlElement.offsetHeight) {
  //     this.render2.addClass(htmlElement,this.className);
  //    } else {
  //     this.render2.removeClass(htmlElement,this.className);
  //    }
  // }

  ngAfterViewInit(): void {
   
  }

  ngOnChanges() {
  }

}
