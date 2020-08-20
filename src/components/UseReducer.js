import React, {useReducer, useEffect, useState, useCallback, useRef} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

//useReducer-Hook
const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default : 
        return state
    }
}




function UseReducer() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(10000);
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])
    // const inputRef = useRef(null)

    // useEffect(() => {
    //     inputRef.current.focus()
    // })

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])

    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div className="useReducer">
            <h1>useReducer, useCallback and useRef Hook</h1>
            <div className="row">
                <div className="col-md-4 card text-center">
                    <h3>useReducer-Hook</h3><br/>
                    <div className="row">
                        <div className="col-md-4">
                            <button onClick={() => dispatch('increment')}>+</button>
                        </div>
                        <div className="col-md-4">
                            {count}
                        </div>
                        <div className="col-md-4">
                            <button onClick={() => dispatch('decrement')}>-</button>
                        </div>
                    </div>
                    <button onClick={() => dispatch('reset')}>Reset</button>
                </div>

                <div className="col-md-4 card text-center">
                    <Title />
                    <div className="row">
                        <div className="col-md-6">
                            <Count text="Age" count={age}/>
                        </div>
                        <div className="col-md-6">
                            <Button handleClick={incrementAge}>Increment Age</Button>
                        </div>
                    </div><br/>
                    
                    <div className="row">
                        <div className="col-md-6">
                        <Count text="Salary" count={salary}/>
                        </div>
                        <div className="col-md-6">
                        <Button handleClick={incrementSalary}>Increment Salary</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 card text-center">
                    <h3>useRef Hook</h3><br/>
                    {/* <input type="text" ref={inputRef}/> */}
                    Hook Timer:- {timer}<br/><br/>
                    <button onClick={() => 
                        clearInterval(intervalRef.current)
                    } >Clear Interval</button>
                </div>
            </div>
           
        </div>
    )
}

export default UseReducer
