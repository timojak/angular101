import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
  
  <h2 *ngIf="userLoggedIn">Welcome!</h2>

  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  <ul>
    <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem">></app-todo-item>
      
    </li>
  </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  userLoggedIn=true;
  title = 'app';
  todoList: TodoItem[] = [
      {title: 'install NodeJS'},
      {title: 'install Angular CLI'},
      {title: 'create new app'},
      {title: 'serve app'},
      {title: 'develop app'},
      {title: 'deploy app'},
    ];


   
  constructor() { }

  ngOnInit() {
  }

  addItem(title: string) {    
    this.todoList.push({ title:title });
  }
}
