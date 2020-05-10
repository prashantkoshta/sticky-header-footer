import { Directive, OnInit, ElementRef, Renderer2, AfterViewInit, HostBinding, OnChanges, OnDestroy, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  share,
  throttleTime
} from 'rxjs/operators';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private readonly className = 'sticky-header';
  constructor(private readonly render2: Renderer2,
  private readonly elementRef: ElementRef) { }


  ngOnInit() {  }

  ngOnDestroy() { }


  ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll')
    .pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      distinctUntilChanged(),
      share()
    );
    scroll$.subscribe(() => {
      this.upateHeaderClass();
    });
  }

  ngOnChanges() { }

  private upateHeaderClass() {
    const htmlElement: HTMLElement = this.elementRef.nativeElement.children[0];
     if (window.pageYOffset > 0) {
      this.render2.addClass(htmlElement,this.className);
     } else {
      this.render2.removeClass(htmlElement,this.className);
     }
  }

}
