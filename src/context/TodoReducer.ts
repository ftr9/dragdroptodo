import {
  IAction,
  IStatusChangeAction,
  ITodoState,
  ITodo,
} from '../interfaces/todos';

import { TaskChangeStatus, TaskType } from '../Enums/TaskTypes';

const todosReducer = (
  state: ITodoState,
  action: IStatusChangeAction | IAction
) => {
  switch (action.type) {
    case TaskType.NEW:
      state.newTodos.push(action.payload);
      return { ...state };

    case TaskType.COMPLETED:
      state.completedTodos.push(action.payload);
      return { ...state };

    case TaskType.PROGRESS:
      state.progressTodos.push(action.payload);
      return { ...state };

    case TaskChangeStatus.SAME_ZONE_CHANGE:
      // eslint-disable-next-line no-case-declarations

      if (action.source.droppableId === 'new') {
        const removedTodo = state.newTodos.splice(action.source.index, 1)[0];
        state.newTodos.splice(action.destination.index, 0, removedTodo);
      }
      if (action.source.droppableId === 'progress') {
        const removedTodo = state.progressTodos.splice(
          action.source.index,
          1
        )[0];
        state.progressTodos.splice(action.destination.index, 0, removedTodo);
      }
      if (action.source.droppableId === 'completed') {
        const removedTodo = state.completedTodos.splice(
          action.source.index,
          1
        )[0];
        state.completedTodos.splice(action.destination.index, 0, removedTodo);
      }

      return { ...state };

    case TaskChangeStatus.DIFFERENT_ZONE_CHANGE:
      // eslint-disable-next-line no-case-declarations
      const sourceDraggableId = action.source.droppableId;
      // eslint-disable-next-line no-case-declarations
      const destinationDroppableId = action.destination.droppableId;
      // eslint-disable-next-line no-case-declarations
      let droppedTodo: ITodo;
      if (sourceDraggableId === 'new') {
        droppedTodo = state.newTodos.splice(action.source.index, 1)[0];
      } else if (sourceDraggableId === 'progress') {
        droppedTodo = state.progressTodos.splice(action.source.index, 1)[0];
      } else {
        droppedTodo = state.completedTodos.splice(action.source.index, 1)[0];
      }
      if (destinationDroppableId === 'new') {
        state.newTodos.splice(action.destination.index, 0, droppedTodo);
      }
      if (destinationDroppableId == 'progress') {
        state.progressTodos.splice(action.destination.index, 0, droppedTodo);
      }
      if (destinationDroppableId === 'completed') {
        state.completedTodos.splice(action.destination.index, 0, droppedTodo);
      }

      return { ...state };

    default: {
      return state;
    }
  }
};

export default todosReducer;
