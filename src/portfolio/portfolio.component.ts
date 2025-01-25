import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgsSrcs:string[] = [
    './images/poert1.png',
    './images/port2.png',
    './images/port3.png',
    './images/poert1.png',
    './images/port2.png',
    './images/port3.png'
  ];
  @ViewChild('boxModal') boxModal!:ElementRef;
  @ViewChild('boxModalImg') boxModalImg!:ElementRef;

  showImg(imgSrc:string):void{
    this.boxModal.nativeElement.classList.remove('d-none');
    this.boxModalImg.nativeElement.setAttribute('src', `${imgSrc}`);
  }

  hideImg(e:Event):void{
    if(e.currentTarget == e.target){
      this.boxModal.nativeElement.classList.add('d-none');
    }
  }
}
