import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { ScrollToTopButtonComponent } from './MyComponents/scroll-to-top-button/scroll-to-top-button.component';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddItemComponent,
    ScrollToTopButtonComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
