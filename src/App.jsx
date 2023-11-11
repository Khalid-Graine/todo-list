import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [Tasks, setTask] = useState([
    {
      id: 0,
      title: "r r r r r r ",
      isDone: true,
    },
    {
      id: 1,
      title: "r r r 44444r r r ",
      isDone: false,
    },
    {
      id: 2,
      title: "r r r r r r ",
      isDone: false,
    },
  ]);

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

  return (
    <>
      <div className=" flex justify-center py-5">
        <div className="md:w-6/12 w-full p-2  bg-red-100">
          <form onSubmit={(e) => hundleSubmit(e)}>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <button type="submit">add</button>
          </form>
          {error && <p className="text-red-400">Please add a task name</p>}
          <ul>
            {Tasks &&
              Tasks.map((task) => (
                <li key={task.id}>
                  <div>{task.title}</div>
                  <div className="flex gap-3">
                    <button onClick={() => toggleTask(task.id)}>
                      {task.isDone ? (
                        <i className="fa-solid fa-check text-blue-500"></i>
                      ) : (
                        <i className="fa-solid fa-xmark text-red-500"></i>
                      )}
                    </button>

                    <button onClick={() => deleteTask(task.id)}>
                      <i className="fa-solid fa-trash hover:text-red-300"></i>
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
