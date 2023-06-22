import TodoTypeNotation from '../card/TodoTypeNotation';
import { TaskType } from '../../Enums/TaskTypes';
interface IDropZoneHeader {
  title: string;
  type: TaskType;
}

const DropZoneHeader = ({ title, type }: IDropZoneHeader) => {
  return (
    <div className="py-2 my-3 border-b-[0.5px] border-black flex justify-between items-center">
      {title}
      <TodoTypeNotation type={type} />
    </div>
  );
};

export default DropZoneHeader;
