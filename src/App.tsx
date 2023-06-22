/* eslint-disable no-case-declarations */
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useReducer } from 'react';
import { todosContextProvider } from './context/TodoContext';
import DragEndHandle from './utils/DragEndHandle';
import todosReducer from './context/TodoReducer';
import DropZone from './components/dropzone/DropZone';
import { TaskType } from './Enums/TaskTypes';

function App() {
  const [store, dispatch] = useReducer(todosReducer, {
    newTodos: [],
    progressTodos: [],
    completedTodos: [],
  });

  return (
    <todosContextProvider.Provider
      value={{
        store,
        dispatch,
      }}
    >
      <h2>Add the task and Drag,Drop to respective section !!</h2>
      <div className="flex flex-col  md:flex-row ">
        <DragDropContext
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onDragEnd={DragEndHandle(dispatch)}
        >
          <Droppable droppableId="new">
            {(provided, snapshot) => (
              <div className="flex-1  mx-2">
                <DropZone
                  innerRef={provided.innerRef}
                  provider={provided}
                  snapshot={snapshot}
                  taskType={TaskType.NEW}
                  todoType="newTodos"
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="progress">
            {(provided, snapshot) => (
              <div className="flex-1 mx-2">
                <DropZone
                  innerRef={provided.innerRef}
                  provider={provided}
                  snapshot={snapshot}
                  taskType={TaskType.PROGRESS}
                  todoType="progressTodos"
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="completed">
            {(provided, snapshot) => (
              <div className="flex-1 mx-2">
                <DropZone
                  innerRef={provided.innerRef}
                  provider={provided}
                  snapshot={snapshot}
                  taskType={TaskType.COMPLETED}
                  todoType="completedTodos"
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </todosContextProvider.Provider>
  );
}

export default App;
