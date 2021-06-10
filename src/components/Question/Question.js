import React,{useState} from 'react'
import './_question.scss'

function Question({question, answer}) {

    const [opener, setOpener] = useState(false)

    return (
        <div className="question">
            <div className="question__heading">
                <p>{question}</p>
                <p onClick={()=>setOpener(!opener)} style={{cursor:"pointer"}}>{!opener?"+":"X"}</p>
            </div>

            <div className={opener? 'question__answer' : 'question__answer display__none'}>
                <p >{answer}</p>
            </div>
            
            
        </div>
    )
}

export default Question
