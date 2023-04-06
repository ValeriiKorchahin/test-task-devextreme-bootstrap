import {AfterViewChecked, AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appOnImageLoading]'
})
export class OnImageLoadingDirective implements AfterViewInit, AfterViewChecked {

  path = '../../../assets/loading.gif';

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.width = '128';
    this.el.nativeElement.src = this.path;
  }

  ngAfterViewChecked() {
    this.el.nativeElement.width = '128';
  }

}
