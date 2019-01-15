import React, { useState } from 'react'

import SimpleHooks from './components/SimpleHooks';
import HooksWithSingleState from './components/HooksWithSingleState';
import HooksWithMultipleState from './components/HooksWithMultipleState';
import HooksRule from './components/HooksRule';
import HooksWithUseEffect from './components/HooksWithUseEffect';
import HooksWithUseContext from './components/HooksWithUseContext';
import HooksWithUseReducer from './components/HooksWithUseReducer';
import HooksWithUseRef from './components/HooksWithUseRef';
import CustomHooks from './components/CustomHooks';
import UseReducerVsUseState from './components/UseReducerVsUseState';

const Welcome = props  => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    const titleList = [ 
        "Simple Hooks",
        "Hooks with Multiple State",
        "Hooks with Single State",
        "Rules of Hooks",
        "The useEffect() Hook with Http",
        "The useContext() Hook",
        "The useReducer() Hook",
        "The useReducer() vs useState()",
        "The useRef()",
        "Create a custom Hook"
    ]

    const onTitleClick = (e, index) => {
        e.preventDefault()
        setSelectedIndex(index)
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="jumbotron">
                    <h2 className="text-center">Surfing with Hooks</h2>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            {   titleList.length === 0 &&
                                <li className="list-group-item">No Title Available</li>
                            }
                            {   titleList.map((item, index) => {
                                return (
                                    <li key={index} style={{backgroundColor: index === selectedIndex ? 'lightgray' : ''}} 
                                        className="list-group-item" onClick={e=>onTitleClick(e,index)}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        {selectedIndex === 0 && <SimpleHooks title={titleList[selectedIndex]}/> }
                        {selectedIndex === 1 && <HooksWithMultipleState title={titleList[selectedIndex]}/> }
                        {selectedIndex === 2 && <HooksWithSingleState title={titleList[selectedIndex]}/> }
                        {selectedIndex === 3 && <HooksRule title={titleList[selectedIndex]}/> }
                        {selectedIndex === 4 && <HooksWithUseEffect title={titleList[selectedIndex]}/> }
                        {selectedIndex === 5 && <HooksWithUseContext title={titleList[selectedIndex]}/> }
                        {selectedIndex === 6 && <HooksWithUseReducer title={titleList[selectedIndex]}/> }
                        {selectedIndex === 7 && <HooksWithUseRef title={titleList[selectedIndex]}/> }
                        {selectedIndex === 8 && <UseReducerVsUseState title={titleList[selectedIndex]}/> }
                        {selectedIndex === 9 && <CustomHooks title={titleList[selectedIndex]}/> }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Welcome