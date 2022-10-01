import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { addTodoDto } from './dto/addTodoDto';
import { updateTodoDto } from './dto/updateTodoDto';

import { TodoModel } from './TodoModel';

@Controller('todo')
export class TodoController {
  private todos = [];
  public findTodos(id: string) {
    const founded = this.todos.find((el) => el.id == id);
    return founded;
  }
  public findIndexTodos(id: string) {
    const index = this.todos.findIndex((el) => el.id == id);
    return index;
  }
  @Get()
  getTodos() {
    return this.todos;
  }
  @Post()
  addTodo(
    @Body() body : addTodoDto
  ) {
    const {name,description}=body ; 
    if (!name || !description) {
      return 'name or description is not set';
    }
    const todoToAdd = new TodoModel();
    todoToAdd.name = name;
    todoToAdd.description = description;
    this.todos.push(todoToAdd);
    return 'todo added';
  }
  @Get(':id')
  getTodo(@Param('id') id: string) {
    const todoFound = this.findTodos(id);
    if (todoFound) {
      return todoFound;
    } else {
      return 'not found';
    }
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    const index = this.findIndexTodos(id);
    console.log(index) ;
    if (index>=0) {
      this.todos=this.todos.splice(index, index);
      return `the todo element is deleated`;
    } else {
      return 'todo element not found,nothing deleated';
    }
  }
  @Put(':id')
  change(@Param('id') id: string, @Body() body : updateTodoDto) {
    const todoFound = this.findTodos(id); 
    if(todoFound){
      const {name , description ,status} = body ;
      let changes : string ="" ;  
      if(name){
        todoFound.name=name ;
         changes="name changed "
      }
      if(description){
        
        todoFound.description=description ;
        changes="description and "+changes ;
        
      }
      if(status){
        todoFound.status=status ; 
        changes="status and "+changes ; 
      }
      return changes==""?"nothing changed":changes ; 
    
      

    }else{
      return "todo is not found , nothing changed " ;
    }
  }
}
