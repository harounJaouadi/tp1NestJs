import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addTodoDto } from './dto/addTodoDto';
import { updateTodoDto } from './dto/updateTodoDto';
import { TodoStatusEnum } from './enum/todoStatusEnum';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async addTodo(body: addTodoDto) {
    const { name, description } = body;

    const todoToAdd = new TodoEntity(name, description);
    try {
      await this.todoRepository.save(todoToAdd);
      return todoToAdd;
    } catch (error) {
      return 'the todo is not added';
    }
  }
  async updateTodo(id: string, body: updateTodoDto) {
    try {
      const { name, description, status } = body;
      await this.todoRepository.update(Number(id), {
        name,
        description,
        status,
      });

      return 'updated';
    } catch (error) {
      return 'problem in the update';
    }
  }

  async deleteTodo(id: string) {
    try {
      const sectionToRemove = await this.todoRepository.findOneBy({
        id: Number(id),
      });
      if (sectionToRemove) {
        await this.todoRepository.delete(Number(id));
      } else {
        return 'notFound todo';
      }

      return 'deleated';
    } catch (error) {
      return 'problem in the delete operation';
    }
  }
  async deleteSoft(id: string) {
    try {
      const sectionToRemove = await this.todoRepository.findOneBy({
        id: Number(id),
      });
      if (sectionToRemove) {
        await this.todoRepository.softDelete(Number(id));
      } else {
        return 'notFound todo';
      }

      return 'deleated';
    } catch (error) {
      return 'problem in the delete operation';
    }
  }
  async restoreDelete(id: string) {
    try {
      const { affected } = await this.todoRepository.restore(Number(id));
      if (affected) {
        return 'restored';
      } else {
        return 'nothing is restored';
      }
    } catch (error) {
      return 'nothing restored';
    }
  }
  async numberOfTodoForEveryEnum() {
    try {
      return {
        waiting: (
          await this.todoRepository.findBy({ status: TodoStatusEnum.waiting })
        ).length,
        actif: (
          await this.todoRepository.findBy({ status: TodoStatusEnum.actif })
        ).length,
        done: (
          await this.todoRepository.findBy({ status: TodoStatusEnum.done })
        ).length,
      };
    } catch (error) {
      return 'there is a problem';
    }
  }

  async getAllTodos() {
    return await this.todoRepository.find() ; 
  }
}
