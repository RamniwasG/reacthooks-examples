import React, { useState } from 'react'

const SimpleHooks = props  => {
    
    const [todoName, setTodoName] = useState('')
    
    const onInputChange = (event) => {
        setTodoName(event.target.value)
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default SimpleHooks