import React, {useState} from 'react';
function Todo() {
    const [task,setTask]=useState('');
    const [tasks,setTasks]=useState([]);
    const addTask=()=>{
        setTasks([...tasks,task]);
        setTask('');
    };
    return(
        <div>
            <h2>Todo App</h2>
            <input
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={addTask}>
                Add
            </button>
            <ul>
                {
                    tasks.map((t,i)=>(
                        <li key={i}>{t}</li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Todo;