import {Filter, Where, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  put,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import {Todo} from '../models';
import {TodoRepository} from '../repositories';

export class TodoController {
  constructor(
    @repository(TodoRepository)
    public todoRepository : TodoRepository,
  ) {}

  @post('/todos')
  async create(@requestBody() obj: Todo)
    : Promise<Todo> {
    return await this.todoRepository.create(obj);
  }

  @get('/todos/count')
  async count(@param.query.string('where') where: Where): Promise<number> {
    return await this.todoRepository.count(where);
  }

  @get('/todos')
  async find(@param.query.string('filter') filter: Filter)
    : Promise<Todo[]> {
    return await this.todoRepository.find(filter);
  }

  @patch('/todos')
  async updateAll(
    @param.query.string('where') where: Where,
    @requestBody() obj: Todo
  ): Promise<number> {
    return await this.todoRepository.updateAll(where, obj);
  }

  @del('/todos')
  async deleteAll(@param.query.string('where') where: Where): Promise<number> {
    return await this.todoRepository.deleteAll(where);
  }

  @get('/todos/{id}')
  async findById(@param.path.number('id') id: number): Promise<Todo> {
    return await this.todoRepository.findById(id);
  }

  @patch('/todos/{id}')
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() obj: Todo
  ): Promise<boolean> {
    return await this.todoRepository.updateById(id, obj);
  }

  @del('/todos/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<boolean> {
    return await this.todoRepository.deleteById(id);
  }
}
