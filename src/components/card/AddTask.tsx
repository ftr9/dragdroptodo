import { useState } from 'react';
import { IoAddSharp, IoClose } from 'react-icons/io5';

interface IAddTask {
  addClickHandle: (arg: string) => void;
}

const AddTask = ({ addClickHandle }: IAddTask) => {
  const [isTaskInputVisible, setTaskInputVisible] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const addTaskHandle = () => {
    setTaskInputVisible(true);
  };

  const closeTaskHandle = () => {
    setTaskInputVisible(false);
  };

  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const createNewTaskHandle = () => {
    addClickHandle(taskInput.trim());
    setTaskInput('');
  };

  return (
    <div>
      {isTaskInputVisible ? (
        <div className=" space-y-2 border-[0.6px] border-black py-3 px-2 rounded-md">
          <div className="flex items-center">
            <input
              value={taskInput}
              onChange={inputChangeHandle}
              className="py-2 text-sm px-3 w-full rounded-md"
              type="text"
              placeholder="Enter your task ..."
            />
            <div
              onClick={closeTaskHandle}
              className="text-xl ml-2 hover:cursor-pointer"
            >
              <IoClose />
            </div>
          </div>
          <button
            onClick={createNewTaskHandle}
            className=" active:translate-y-[3px] px-3 text-white text-sm py-[4px] rounded-md  bg-red-500"
          >
            Add
          </button>
        </div>
      ) : (
        <div
          onClick={addTaskHandle}
          className="border-[0.5px] border-black p-2 flex justify-center items-center hover:bg-[#e9ecef]"
        >
          <IoAddSharp className="text-[18px]" />
        </div>
      )}
    </div>
  );
};

export default AddTask;
