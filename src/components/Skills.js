import React from 'react'
import {ProgressBar} from 'react-bootstrap'

const ListItem = props => {
    const label = props.label
    const now = props.now
    return (
        <div>
        <label>{label}</label>
        <ProgressBar active now={now}/>
        </div>
    )
}

const Skillset = props => {
    const skills = props.info
    const progressSkills = skills.map(value => <ListItem label={Object.keys(value)} now={Object.values(value)}/>)

    return (
        <div>
            {progressSkills}
        </div>
    )
}

export default Skillset