import React from 'react'
const Test = ()=><div key={1}>test3</div>
export default function(){
    const t = <Test/>
    return (<div>
        Demo test
        {<div key={1}>test2</div>}
        {t}
        <div>split</div>
        {t}
        </div>
    )
}

