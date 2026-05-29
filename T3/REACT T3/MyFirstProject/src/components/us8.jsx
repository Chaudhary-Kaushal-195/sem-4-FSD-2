import { useState } from "react";
import './us8.css';

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
    <div className="us8Container">
      <div className="us8Content">
        <h1 className="us8Title">My Todo List</h1>
        
        <div className="us8InputGroup">
          <input 
            type="text" 
            className="us8Input"
            placeholder="Add a new task..."
            value={task} 
            onChange={(e) => settask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button className="us8AddButton" onClick={addTask}>Add Task</button>
        </div>

        {todo.length === 0 ? (
          <div className="us8EmptyState">
            <p className="us8EmptyText">No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          <ul className="us8TaskList">
            {todo.map((t) => (
              <li key={t.id} className="us8TaskItem">
                <p className="us8TaskName">{t.name}</p>
                <button className="us8DeleteButton" onClick={() => deleteTask(t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

           


