import React from 'react'

function ToDolist({ inItem, deleteHandel }) {

    return (
        <div>
            <ul className="rm-to-list">
                {
                    inItem.length > 0 && inItem.map((list, i) => {
                        return (
                            <li key={i} style={{position:'relative'}}>{list} <button style={{position:'absolute', right: 6}} onClick={() => deleteHandel(i)}>Delete</button></li>
                        )
                    })
                }
                <h6>Total List Item : <strong>{inItem.length}</strong></h6>
            </ul>
        </div>
    )
}

export default ToDolist
