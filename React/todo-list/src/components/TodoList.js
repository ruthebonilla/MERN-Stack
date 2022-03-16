import React, { useState } from 'react';
import './list.css';

const TodoList =(props) =>{
    const [newTodo, setNewTodo] = useState("");
    const [list, setList] = useState([]);

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        if (newTodo.length === 0){
            // return; 
            alert(`HEYYY!... nothing in field`);
        }

        const todoItem ={
            text: newTodo,
            complete: false
        }

        setList ([...list, todoItem]);
        setNewTodo("");
    }

    const onDeleteHandler = (deleteIndex) =>{
        const filteredList = list.filter((item, i)=> {
            return i !== deleteIndex;
        })
        setList(filteredList);
    }

    const handleToggleComplete = (index) =>{
        const updatedTodos = list.map((item, i)=>{
            if(index === i){
                item.complete = !item.complete;
                // To avoid mutating the todo directly, do this:
                // const updatedTodo = { ...item, complete: !item.complete };
                // return updatedTodo;
            }
            return item;
        });
        setList(updatedTodos);
    }


    return(
        <div>
            <h1 className='mt-3'>To Do List 📝 </h1>
            <form className='w-50 mx-auto mt-4' onSubmit={(event)=>{onSubmitHandler(event);}}>
                <input type="text" value={newTodo} onChange={(event)=>setNewTodo(event.target.value)} />
                <br />
                <button className='btn btn-success mt-2 mb-5' type='submit'>add to list</button>
            </form>

            <div className='listBox'>
                {list.map((item, i) =>{
                    const listClasses = [];
                    if (item.complete) {
                        listClasses.push("crossed-out");
                    }

                    return (
                    
                    <ul key={i}> 
                        <li className={listClasses.join(" ")} >{item.text}
                        <input className='m-2' type="checkbox" onChange={(event)=>{handleToggleComplete(i);}} checked={item.complete} />
                        <button className="btn btn-outline-danger btn-sm m-2" onClick={(event)=>{onDeleteHandler(i);}}>Delete</button>
                        </li>
                    </ul>
                    );
                })}
            </div>

        </div>
    );
}




export default TodoList;