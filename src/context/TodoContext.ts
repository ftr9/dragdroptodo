import { createContext } from 'react';
import { ITodoState, IAction } from '../interfaces/todos';

export interface ITodosContextProvider {
  store: ITodoState;
  dispatch: React.Dispatch<IAction>;
}

export const todosContextProvider = createContext<ITodosContextProvider>({
  store: { newTodos: [], progressTodos: [], completedTodos: [] },
  dispatch: ({ type, payload }) => {
    console.log(type, payload);
  },
});
