import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  template:`
  <div (click)="handleClick()">{{content}}</div>
`
})
export class TodoListItemComponent {

  @Input() content: string;
  @Input() index: number;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  public handleClick(): void {
    this.delete.emit(this.index);
  }

}
