import { TaskType } from '../../Enums/TaskTypes';
import TodoTypeNotation from './TodoTypeNotation';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface ITodocard {
  title: string;
  type: TaskType;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  innerRef: (element: HTMLElement | null) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoCard = ({ provided, innerRef, title, type }: ITodocard) => {
  return (
    <div
      ref={innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      className="py-[6px]"
    >
      <div className=" cursor-pointer flex border-black justify-between items-center px-3 py-2 border-[0.5px] rounded-md">
        <p>{title}</p>
        <TodoTypeNotation type={type} />
      </div>
    </div>
  );
};

export default TodoCard;
