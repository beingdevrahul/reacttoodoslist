import React from 'react'
import { useState } from 'react';

export const Addtodos = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be empty")
        }
        else {
            addTodo(title, desc);
            setDesc("");
            setTitle("");
        }



    }
    return (
        <div id="addTodos">
            <h1>Add Todos</h1>
            <form onSubmit={submit}>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Title: </label>
                    <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" placeholder="Enter Todo title" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Discription: </label>
                    <input type="text" value={desc} className="form-control" onChange={(e) => { setDesc(e.target.value) }} id="desc" placeholder="Enter todo Discription" />
                </div>
                <button type="submit" className="btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
