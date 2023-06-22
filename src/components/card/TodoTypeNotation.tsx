import { TaskType } from '../../Enums/TaskTypes';

interface ITodoTypeNotation {
  type: TaskType;
}

const TodoTypeNotation = ({ type }: ITodoTypeNotation) => {
  return (
    <div
      className={`h-5 w-5 rounded-md ${
        type === TaskType.NEW && 'bg-blue-500'
      } ${type === TaskType.COMPLETED && 'bg-green-500'} ${
        type === TaskType.PROGRESS && 'bg-red-500'
      }  `}
    ></div>
  );
};

export default TodoTypeNotation;
