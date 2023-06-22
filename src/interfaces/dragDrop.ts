import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { TaskType } from '../Enums/TaskTypes';

export interface IDroppableZone {
  provider: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  innerRef: (element: HTMLElement | null) => void;
  taskType: TaskType;
  todoType: 'completedTodos' | 'newTodos' | 'progressTodos';
}
