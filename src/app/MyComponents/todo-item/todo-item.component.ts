import { Component, Input,Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{
  //Getting todo from parent
  @Input() todo!: Todo;
  //Acceping Todo Index 
  @Input() i!:number;
  //creating TodoDelete EventEmitter 
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  //creating toggleTodo EventEmitter
  @Output() toggleTodo : EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo){
    //triggering todoDelete Event by using emit method
    this.todoDelete.emit(todo);
    console.log("On clicked!!");
  }
  //function to mark the todo as done and undone on clicking the check box
  onCheckBoxClick(todo:Todo){
    //triggering toggleTodo event by using emit method
    console.log("todo checkbox Called!!",todo);
    this.toggleTodo.emit(todo);
  }
}
