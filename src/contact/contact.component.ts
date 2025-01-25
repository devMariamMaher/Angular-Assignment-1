import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showHideLabel(currentLabel:HTMLLabelElement, currentInput:HTMLInputElement):void{
    if(currentInput.value){
      currentLabel.style.top = '0';
    } else{
      currentLabel.style.top = '42px';
    }
  }
}
