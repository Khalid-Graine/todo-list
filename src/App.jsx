import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
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
    title == "" ? setError(true) : setError(false);
    const newTask = {
      id: Tasks.length,
      title:title,
      isDone:false,
    };
     // Update state to include the new task
     setTask((prevTasks) => [...prevTasks, newTask]);

     // Clear the input field
     setTitle("");
  
    
  };
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
            {Tasks && Tasks.map((task) => (
              <li key={task.id}>
                <div>{task.title}</div>
                <div className="flex gap-3">
                  <button>done</button>
                  <button>delete</button>
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
