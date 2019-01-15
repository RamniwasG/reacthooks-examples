import React, { useState } from 'react'

const HooksWithSingleState = props  => {

    const [todoState, setTodoState] = useState({inputState: '', todoList: []})
    
    const onInputChange = (event) => {
        setTodoState({
            inputState :event.target.value, 
            todoList: todoState.todoList 
        })
    }

    const onAddClickButtonHandler = () => {
        setTodoState({
            inputState: todoState.inputState,
            todoList: todoState.todoList.concat(todoState.inputState)
        })
    }

    return (
        <React.Fragment>
            <h4>{props.title}</h4>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="name">Enter Your Name:</label>
                        <input className="form-control" type="text" 
                            value={todoState.inputState} onChange={onInputChange} />
                    </div>
                    <input className="btn btn-success" onClick={onAddClickButtonHandler} type="submit" />
                </div>
                <div className="col-sm-6">
                <label htmlFor="name">Item List:</label>
                    <ul className="list-group">
                        {   todoState.todoList.length === 0 &&
                            <li className="list-group-item">No Item Available</li>
                        }
                        {   todoState.todoList.map((item, index) => {
                            return (
                                <li key={index} className="list-group-item">
                                    <h3>{item}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HooksWithSingleState