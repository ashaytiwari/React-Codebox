import React, {useState, useEffect} from 'react'

function UseState() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [items, setItem] = useState([]);
    

    

    const addItem = () => {
        setItem([...items,
        {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div className="hook-counter">
            <h1>useState Hook</h1>
            <div className="row">

                <div className="col-md-4 card text-center">
                <h3>Enter information</h3><br/>
                    <input type="text" className="form-control"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value })}
                    placeholder="First Name"
                    /><br/>
                    <input type="text" className="form-control"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value })}
                    placeholder="Last Name"
                    />
                    <h4>Your firstName is {name.firstName}</h4>
                    <h4>Your lastName is {name.lastName}</h4>
                </div>

                <div className="col-md-4 card text-center"> 
                    <h3>Counter</h3><br/>
                    <div className="row">
                        <div className="col-md-5">
                        <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
                        </div> 

                        <div className="col-md-2">
                            {count}<br/><br/>
                        </div>

                        <div className="col-md-5">
                        <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
                        </div>
                    </div>
                    <button onClick={() => setCount(initialCount)}> Reset </button>
                </div>

                <div className="col-md-4 card text-center">
                    <h3>Random Generated List</h3><br/>
                    <button onClick={addItem}>Generate List</button>
                    <ul>
                        {items.map(item => ( 
                            <li key={item.id}>{item.value}</li>
                        ))}
                    </ul>
                </div>

            </div>
        
        </div>
    )
}

export default UseState
