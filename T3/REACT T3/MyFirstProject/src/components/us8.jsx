import { useState } from "react";

export default function Us8() {
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);
  const addTask= () => {
    if(task.trim() !== "") {
      settodo([...todo,{id: Date.now(), name: task }]);
      settask("");
    }
  }
  const deleteTask = (id) => {
    settodo(todo.filter((task) => task.id !== id));
  }
  
return (
        <>
            <input type="text" value={task} onChange={(e) => settask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {todo.map((t) => (
                    <div key={t.id}>
                        <h3>{t.name}</h3>
                        <button onClick={() => deleteTask(t.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </>
    )

}

           


