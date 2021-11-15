import React, { useState } from 'react'
import ToDolist from './ToDolist'

function TodoApp() {
    const [input, setInput] = useState({
        text: ''
    })
    const [inItem, setInItem] = useState([])

    const onchangeHandler = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        setInput({
            ...input,
            [name]: value
        })
    }
    let err
    const handelSubmit = (e) => {
        e.preventDefault();

        if (!input.text) {
            return (
                err = <span>please fill in the blanks text</span>
            )
        } else {
            setInItem((prev) => {
                return [...prev, input.text]
            })
            setInput({
                text: ''
            })
        }
    }
    const deleteHandel = (id) => {
        console.log(id)
        const updateitem = inItem.filter((elmn, ind) => {
            return ind !== id
        })
        setInItem(updateitem)
    }
  



    return (
        <div className="rm-todo-app">
            <div>
                <h5>To do App</h5>
                <form className="form-inline" action="" onSubmit={handelSubmit}>
                    <input
                        className="mr-sm-2 form-control"
                        type="text"
                        placeholder="Add to Do"
                        value={input.text}
                        onChange={onchangeHandler}
                        name="text" />
                    {err}
                    <button type="submit" className="btn btn-outline-success">Add to Do</button>
                </form>
                <ToDolist deleteHandel={deleteHandel} inItem={inItem} />
            </div>
        </div>
    )
}

export default TodoApp
