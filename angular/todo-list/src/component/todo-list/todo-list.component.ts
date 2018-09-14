import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  template:`
  <div>
    <input [(ngModel)]="inputValue" />
    <button (click)="handleButtonClick()">提交</button>
  </div>
  <ul>
    <li *ngFor="let item of list; let index=index;">
      <todo-list-item
        [content]="item"
        [index]="index"
        (delete)="handleDelete($event)"></todo-list-item>
    </li>
  </ul>
`
})
export class TodoListComponent {

  public list: string[] = [];

  public inputValue: string = '';

  public handleButtonClick(): void {
    this.list.push(this.inputValue);
    this.inputValue = '';
  }

  public handleDelete(index: number) {
    this.list.splice(index, 1);
  }

}
