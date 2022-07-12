import React, { useEffect, useState } from "react";
import Task from "../Task/Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [updated, setUpdated] = useState(false);
  const url = "http://localhost:8000/api/todo";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setTasks(res));
  }, [updated]);
  return (
    <div>
      {tasks
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        .sort((a, b) => a.done - b.done)
        .map((task) => (
          <Task
            key={task._id}
            Id={task._id}
            title={task.title}
            date={task.date}
            detail={task.detail}
            done={task.done}
            updated={updated}
            setUpdated={setUpdated}
          />
        ))}
    </div>
  );
}

export default TaskList;
