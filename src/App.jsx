import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [Tasks, setTask] = useState([
    {
      id: 0,
      title: "r r r r r r ",
      isDone: false,
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

  useEffect(() => {
    const count = Tasks.reduce((acc, task) => (task.isDone ? acc + 1 : acc), 0);
    setDoneCount(count);
    
  }, [Tasks]);

  useEffect(() => {
    setProgress(doneCount / Tasks.length * 100)
  },[doneCount])


  return (
    <>
      <div className=" flex justify-center py-5">
        <div className="md:w-6/12 w-full p-2 flex flex-col gap-2">
          <div>
            <p>you have totoal of {Tasks.length} taskes</p>
            <p>you have done {doneCount}</p>
          </div>
          
          {/* add new task */}
          <form onSubmit={(e) => hundleSubmit(e)} className=" flex gap-2">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="h-8 flex-grow pl-1 border border-black"
            />

            <button type="submit" className="bg-blue-300 px-5 rounded-sm ">
              add
            </button>
          </form>
          {error && <p className="text-red-400">Please add a task name</p>}

          {/* progress */}
          <div className="border border-black h-3 ">
            <div className="bg-green-300 flex h-full transition-all ease-linear delay-200 duration-500" 
            style={{width: progress + '%'}}></div>
          </div>


          {/* display tasks */}
          <ul className="w-full flex flex-col gap-2">
            {Tasks &&
              Tasks.map((task) => (
                <li
                  key={task.id}
                  className="border-black border p-1 flex justify-between"
                >
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
