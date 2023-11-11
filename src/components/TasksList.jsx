const TasksList = ({Tasks,toggleTask,deleteTask}) => {
    return ( 
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

     );
}
 
export default TasksList;