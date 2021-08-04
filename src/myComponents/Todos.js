import React from 'react'
import '../App.css';
import {TodoItems} from './TodoItems'

export default function Todos({todos,onDelete}) {
    return (
        <div className="todos">
            <h1>Todos lists</h1>
            {todos.length===0?(<div className="notododisplay">
                    <h3>No todos to display</h3>
                    <p>you have deleted all the todos..</p>
                </div>
                    ) : todos.map((T)=>{
                return (<TodoItems todos={T} key={T.sno} onDelete={onDelete}/>)
            })}
        </div>
    )
}
