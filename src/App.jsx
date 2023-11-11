import { useState } from "react";

function App() {
  const [Tasks, setTask] = useState([
    {
      id: 1,
      title: "r r r r r r ",
      isDone: false,
    },
    {
      id: 2,
      title: "r r r 44444r r r ",
      isDone: false,
    },
    {
      id: 3,
      title: "r r r r r r ",
      isDone: false,
    },
  ]);

  return (
    <>
      <div className=" flex justify-center py-5">
        <div className="md:w-6/12 w-full p-2  bg-red-100">
          <form action="">
            <input type="text" value={"write any things"} />
            <button type="submit">add</button>
          </form>
          <ul>
            {Tasks.map((task) => (
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
