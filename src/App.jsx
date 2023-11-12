import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TasksList from "./components/TasksList";
import CreateForm from "./components/CreateForm";
import tasksData from "../data/tasksData";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [Tasks, setTask] = useState(tasksData);

  const hundleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Tasks.length,
      title: title,
      isDone: false,
    };

    if (title == "") {
      setError(true);
    } else {
      setError(false);
      setTask((prevTasks) => [...prevTasks, newTask]);
      setTitle("");
    }
  };

  function toggleTask(id) {
    setTask((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      });
    });
  }

  function deleteTask(id) {
    setTask(function (oldTasks) {
      return oldTasks.filter(function (task) {
        return task.id !== id;
      });
    });
  }

  useEffect(() => {
    const count = Tasks.reduce((acc, task) => (task.isDone ? acc + 1 : acc), 0);
    setDoneCount(count);
  }, [Tasks]);

  useEffect(() => {
    setProgress((doneCount / Tasks.length) * 100);
  }, [doneCount]);

  return (
    <>
      <div className=" flex justify-center py-5">
        <div className="md:w-6/12 w-full p-2 flex flex-col gap-2">
          <CreateForm
            title={title}
            hundleSubmit={hundleSubmit}
            setTitle={setTitle}
          />
          <ErrorMessage error={error} />
          <ProgressBar progress={progress} />
          <TasksList
            Tasks={Tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
