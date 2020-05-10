import { Directive, OnInit, HostListener, ElementRef, Renderer, Renderer2, AfterViewInit, HostBinding, OnChanges } from '@angular/core';


@Directive({
  selector: '[appStickyContent]'
})
export class StickyContentDirective  implements OnInit, AfterViewInit, OnChanges {
  private readonly className = 'sticky-content';
  constructor(private readonly render2: Renderer2,
  private readonly elementRef: ElementRef) { }
  ngOnInit() {  }
  ngAfterViewInit(): void {
    const contentElement: HTMLElement = this.elementRef.nativeElement;
    const footerElement: HTMLElement = this.elementRef.nativeElement.nextElementSibling;
    if(footerElement.hasAttribute('appStickyFooter')) {
      const paddingBottom: any = (footerElement.children[0] as HTMLElement).offsetHeight;
      this.render2.setStyle(contentElement.children[0],'padding-bottom', `${paddingBottom}px`);
      console.log(contentElement.children[0]);
    }
  }

  ngOnChanges() {
  }


}
