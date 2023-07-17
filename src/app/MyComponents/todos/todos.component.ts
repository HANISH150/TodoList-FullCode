import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos!:Todo[];
  constructor(){
    //getting local item of name "todos" from localStorage
    const LocalItem = localStorage.getItem("todos");
     
    if(LocalItem==null){
      //if There is nothing stored in localStorage then we assign an empty array to todos arrayItem
      this.todos=[];
    }else{
      //else we convert the string stored in localStorage to JS object by using 'parse' method on string
      this.todos = JSON.parse(LocalItem);
    }
  }
  //function to delete the Todo
  deleteTodo(todo:Todo){
    console.log("DeleteTodo function Called!!");
    //gettting index of todoItem to be deleted
    let index = this.todos.indexOf(todo);
    //index --> postion from where deletion must begin // 1--> no.of entries to be deleted from index
    this.todos.splice(index,1);
    //modifying the data in localStorage
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  //function to add to TODO
  addTodo(todo:Todo){
    console.log("Adding the todo...");
    console.log(todo);
    this.todos.push(todo);
    //modifying the data in localStorage
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  //function to toggle the Todo(i.e marking read and striking off completed todo)
  todoToggle(todo:Todo){
    //gettting index of todoItem to be deleted
    console.log("Toggle todo called!!");
    let index = this.todos.indexOf(todo);
    console.log(index,"index of todo")
    this.todos[index].active = !this.todos[index].active;
    //modifying the data in localStorage
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
