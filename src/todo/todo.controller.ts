import { Controller, Post, Get, Req, Body, Param, NotFoundException, Delete, Put } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { throws } from 'assert';

import { TodoModal } from './TodoModel';

@Controller('todo')
export class TodoController {

  private todos = [];
  find(id : string){
    const founded=this.todos.find((el)=>el.id==id) ; 
    return founded ; 
  }
  @Get()
  getTodos() {
    return this.todos;
  }
  @Post()
  addTodo(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    const todoToAdd=new TodoModal() ; 
    todoToAdd.name=name ; 
    todoToAdd.description=description ; 
    console.log(todoToAdd) ; 
    this.todos.push(todoToAdd);
    console.log(this.todos) ;  


  } ; 
  @Get(":id")
  getTodo(@Param("id") id:string){
    const todoFound=this.find(id) ; 
    if(todoFound) {
        return todoFound ;
    }else{
        return "not found" ;
    }
  }
  @Delete(":id")
  deleteTodo(@Param("id") id:string){
    
    let index : number ; 
    index=this.todos.findIndex((el)=>{
        return el.id==id ; 
    }) 
    if(index){
        this.todos.splice(index,index) ; 
    }else{
        return "todo element not found" ; 
    }
  }
  @Put(":id")
  change(@Param("id") id:string ){
    
  }

}
