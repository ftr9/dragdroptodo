import { TaskType } from '../Enums/TaskTypes';
import { TaskChangeStatus } from '../Enums/TaskTypes';

export interface ITodo {
  title: string;
  status: TaskType;
  id: string;
}
export interface ITodoState {
  newTodos: ITodo[];
  progressTodos: ITodo[];
  completedTodos: ITodo[];
}

export interface IAction {
  type: TaskType;
  payload: ITodo;
}

export interface IStatusChangeAction {
  type: TaskChangeStatus;
  source: { index: number; droppableId: string };
  destination: { index: number; droppableId: string };
}
