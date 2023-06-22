import { DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { TaskChangeStatus } from '../Enums/TaskTypes';
import React from 'react';
import { IAction, IStatusChangeAction } from '../interfaces/todos';

const DragEndHandle = (
  dispatch: React.Dispatch<IAction | IStatusChangeAction>
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (result: DropResult, _provided: ResponderProvided) => {
    if (!result.destination) {
      result;
    }

    if (result.source.droppableId === result.destination?.droppableId) {
      dispatch({
        type: TaskChangeStatus.SAME_ZONE_CHANGE,
        source: result.source,
        destination: result.destination,
      });
    } else {
      dispatch({
        type: TaskChangeStatus.DIFFERENT_ZONE_CHANGE,
        source: result.source,
        destination: result.destination as {
          index: number;
          droppableId: string;
        },
      });
    }
  };
};
export default DragEndHandle;
