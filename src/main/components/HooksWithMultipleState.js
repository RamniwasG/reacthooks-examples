import React, { useState } from 'react'

const HooksWithMultipleState = props  => {
    
    const [todoName, setTodoName] = useState('')
    const [todoEmail, setTodoEmail] = useState('')
    const [todoList, setTodoList] = useState([])
    
    const onInputChange = (event) => {
        setTodoName(event.target.value)
    }
    const onEmailChange = (event) => {
        setTodoEmail(event.target.value)
    }

    const onAddClickButtonHandler = () => {
        setTodoList(todoList.concat({name: todoName, email: todoEmail}))
        setTodoName('')
        setTodoEmail('')
    }

    return (
        <React.Fragment>
            <h4>{props.title}</h4>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="name">Enter Your Name:</label>
                        <input className="form-control" type="text" 
                            value={todoName} onChange={onInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Enter Your Email:</label>
                        <input className="form-control" type="text" 
                            value={todoEmail} onChange={onEmailChange} />
                    </div>
                    <input className="btn btn-success" onClick={onAddClickButtonHandler} type="submit" />
                </div>
                <div className="col-sm-6">
                <label htmlFor="name">Item List:</label>
                    <ul className="list-group">
                        {   todoList.length === 0 &&
                            <li className="list-group-item">No Item Available</li>
                        }
                        {   todoList.map((item, index) => {
                            return (
                                <li key={index} className="list-group-item">
                                    <h3>{item.name}</h3>
                                    <p>{item.email}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HooksWithMultipleState