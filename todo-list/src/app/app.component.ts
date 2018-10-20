import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `  <h1>
  Welcome to {{ title }}! 
</h1>
<h2 *ngIf="userLoggedIn">Welcome!</h2>

<app-input-button-unit></app-input-button-unit>
<ul>
    <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem">></app-todo-item>
      
    </li>
  </ul>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
