import React from 'react'

const ProjectOne = () => {
    const arr = [1,2,3,4,5]

    let list = arr.map(a => a === arr.length   ? `${a * 2}` : `${a * 2},`)
    return (
        <div>
            <br>
            </br>
            This is just a practice map on an array :
            
            <h>{list}</h>
        </div>
    )
}

export default ProjectOne