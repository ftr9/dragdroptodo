import { IDroppableZone } from '../../interfaces/dragDrop';
import DropZoneHeader from '../header/DropZoneHeader';
import AddTask from '../card/AddTask';
import { useContext } from 'react';
import { todosContextProvider } from '../../context/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import { Draggable } from 'react-beautiful-dnd';
import TodoCard from '../card/TodoCard';

const DropZone = ({
  provider,
  innerRef,
  taskType,
  todoType,
}: IDroppableZone) => {
  const { store, dispatch } = useContext(todosContextProvider);

  const addClickHandle = (task: string) => {
    if (task.length === 0) {
      return;
    }

    dispatch({
      type: taskType,
      payload: {
        title: task,
        status: taskType,
        id: uuidv4(),
      },
    });
  };

  return (
    <div
      className="my-10 md:my-0 md:min-h-screen"
      ref={innerRef}
      {...provider.droppableProps}
    >
      <DropZoneHeader title={taskType} type={taskType} />
      <AddTask addClickHandle={addClickHandle} />
      {store[todoType].map((value, index) => {
        return (
          <Draggable key={value.id} draggableId={value.id} index={index}>
            {(provided, snapshot) => {
              return (
                <TodoCard
                  provided={provided}
                  snapshot={snapshot}
                  innerRef={provided.innerRef}
                  title={value.title}
                  type={taskType}
                />
              );
            }}
          </Draggable>
        );
      })}
    </div>
  );
};

export default DropZone;
