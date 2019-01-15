import React from 'react';

const HooksRule = props => {
    return (
        <React.Fragment>
            <ul>
                <li>Only Call Hooks at the Top Level, Don’t call Hooks inside loops, conditions, or nested functions</li>
                <li>Only Call Hooks from React Functions, Don’t call Hooks from regular JavaScript functions.</li>
            </ul>
        </React.Fragment>
    )
}

export default HooksRule;