import React from 'react'
import '../App.css';

export const TodoItems = (props) => {
    return (<>
        <div className="items">
            <h3>{props.todos.title}</h3>
            <p>{props.todos.desc}</p>
            <button className="btn" onClick={()=>{props.onDelete(props.todos)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
