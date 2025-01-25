import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('navbar') navbar!:ElementRef;

  @HostListener('window:scroll') changeHeight():void{
    if(scrollY > 30){
      (<HTMLElement>this.navbar.nativeElement).style.paddingBlock = '10px'
    } else{
      (<HTMLElement>this.navbar.nativeElement).style.paddingBlock = '24px'
    }
  }

  constructor(private renderer: Renderer2){}

  private readonly _PLATFORM_ID = inject (PLATFORM_ID)

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      let navHeight = this.navbar.nativeElement.offsetHeight;
      this.renderer.setStyle(document.body, 'margin-top', `${navHeight}px`);
    }
  }
}
