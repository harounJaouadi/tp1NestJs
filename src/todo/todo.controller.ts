import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
  Version,
  Patch,
} from '@nestjs/common';
import { addTodoDto } from './dto/addTodoDto';
import { updateTodoDto } from './dto/updateTodoDto';

import { TodoModel } from './model/TodoModel';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService : TodoService){}
  private todos : TodoModel[] = [] ;
  public findTodos(id: string) {
    const founded = this.todos.find((el) => el.id == id);
    return founded;
  }
  public findIndexTodos(id: string) {
    const index = this.todos.findIndex((el) => el.id == id);
    return index;
  }
  @Get()
  @Version("2")
  getTodos() {
    return this.todos;
  }

  @Get()
  @Version("1")
  getAllTodos(){
    return this.todoService.getAllTodos(); 
  }

  @Get("numberByEnum")
  @Version("1")
  getNumberOfTodoByEnum(){
    return this.todoService.numberOfTodoForEveryEnum() ; 
  }

  @Post()
  @Version("1")
  addTodo(@Body() body : addTodoDto){
    return this.todoService.addTodo(body) ; 
  } ; 
  // @Post()
  // @Version("2")
  // addStaticTodo(
  //   @Body() body : addTodoDto
  // ) {
  //   const {name,description}=body ; 
    
  //   if (!name || !description) {
  //     return 'name or description is not set';
  //   }
  //   const todoToAdd = new TodoModel();
     
    
  //   todoToAdd.name = name;
  //   todoToAdd.description = description;
  //   this.todos.push(todoToAdd);
  //   return 'todo added';
  // }

  
  // @Get(':id')
  // getTodo(@Param('id') id: string) {
  //   const todoFound = this.findTodos(id);
  //   if (todoFound) {
  //     return todoFound;
  //   } else {
  //     return 'not found';
  //   }
  // }
  @Delete(":id")
  @Version("1")
  deleteSoftTodo(@Param('id') id: string){
    return this.todoService.deleteSoft(id) ; 
  }  ;

  @Patch(":id")
  @Version("1")
  restoreDelete(@Param('id') id: string){
    return this.todoService.restoreDelete(id) ; 
  }
  
  
  // @Delete(':id')
  // @Version("2") 
  // deleteTodostatic(@Param('id') id: string) {
  //   const index = this.findIndexTodos(id);
  //   console.log(index) ;
  //   if (index>=0) {
  //     this.todos=this.todos.splice(index, index);
  //     return `the todo element is deleated`;
  //   } else {
  //     return 'todo element not found,nothing deleated';
  //   }
  // }
  @Put(":id")
  @Version("1")
  updateTodo(@Param('id') id: string,@Body() body : updateTodoDto ){
     
    return this.todoService.updateTodo(id,body) ; 
  }



  // @Put(':id')
  // @Version("2")
  // change(@Param('id') id: string, @Body() body : updateTodoDto) {
  //   const todoFound = this.findTodos(id); 
  //   if(todoFound){
  //     const {name , description ,status} = body ;
  //     let changes : string ="" ;  
  //     if(name){
  //       todoFound.name=name ;
  //        changes="name changed "
  //     }
  //     if(description){
        
  //       todoFound.description=description ;
  //       changes="description and "+changes ;
        
  //     }
  //     if(status){
  //       todoFound.status=status ; 
  //       changes="status and "+changes ; 
  //     }
  //     return changes==""?"nothing changed":changes ; 
    
      

  //   }else{
  //     return "todo is not found , nothing changed " ;
  //   }
  // }
}
