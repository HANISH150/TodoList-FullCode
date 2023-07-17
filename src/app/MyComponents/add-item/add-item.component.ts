import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter(); 

  title!: string;
  description!: string;

  onSubmit(){
    const todo = {
      sno:0,
      title:this.title,
      desc:this.description,
      active:true
    }
    this.todoAdd.emit(todo);
    this.title="";
    this.description="";
  }
}
