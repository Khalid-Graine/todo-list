const TasksList = ({Tasks,toggleTask,deleteTask}) => {
    return ( 
        <ul className="w-full flex flex-col gap-2">
            {Tasks &&
              Tasks.map((task) => (
                <li
                  key={task.id}
                  className="border-theBorder  border-Bold p-1 flex justify-between rounded-sm bg-primary"
                >
                  <div>{task.title}</div>
                  <div className="flex gap-3">
                    <button onClick={() => toggleTask(task.id)}>
                      {task.isDone ? (
                        <i className="fa-solid fa-check text-done"></i>
                      ) : (
                       
                        <i className="fa-regular fa-circle text-notDone"></i>
                      )}
                    </button>

                    <button onClick={() => deleteTask(task.id)}>
                      <i className="fa-solid fa-trash hover:text-red-500"></i>
                    </button>
                  </div>
                </li>
              ))}
          </ul>

     );
}
 
export default TasksList;