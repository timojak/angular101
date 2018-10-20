import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
​
@Component({
  selector: 'app-input-button-unit',
  template: `
  <input  #inputElementRef
          [value]="title"
          (keyup.enter)="changeTitle(inputElementRef)">
​
  <button (click)="changeTitle(inputElementRef)">
    Save
  </button>
  {{title}}
  `,  
  styleUrls: ['./input-button-unit.component.css']  
})    
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter();
​
  constructor() { }                     
​
  ngOnInit() {
  }
​
  changeTitle(inputElementReference) {
    this.submit.emit(inputElementReference.value)
    
  }
}