import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UseEffect() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [msg, setMsg] = useState("Hiii, How are you?");
    const [msg2, setMsg2] = useState(" Wait for 5 seconds to change.....");
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [comments, setComments] = useState([]);
    const [CommentsErr, setCommentsErr] = useState("");
    const [id, setId] = useState("");
    const [album, setAlbum] = useState({})
    const [loading, setLoading] = useState(true)
    
    const logMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    // useEffect for Dependency and Data updating
    useEffect(() => {
        setTimeout(() => {
            setMsg(`I'm fine. Thanks for asking :)`);
            setMsg2("See below message is changed");
        }, 5000);
        window.addEventListener('mousemove', logMousePosition)
    }, []);

    // useEffect for Fetching data
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments/`)
            .then(res => {
                console.log(res)
                setComments(res.data)
                setCommentsErr("")
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setCommentsErr("Error in fetching the data")
                setLoading(false)
                setComments([])
            })
    }, [])

    // useEffect for Searching in fetched data
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(res => {
                console.log(res)
                setAlbum(res.data)
            })
            .catch(err => {
                console.log(err)
                setCommentsErr("Error in fetching the data")
            })
    }, [id])

    return (
        <div className="useEffect">
            <h1>useEffect Hook</h1>
            <div className="row">

            <div className="col-md-2"></div>

            <div className="col-md-4 card text-center">
                <h3>See Magic!</h3><br/>
                {msg2}<br/><br/>
                <button onClick={() => setCount(count + 1)}>Clicked {count} times</button><br/><br/>
                {msg}{count}      
            </div>

            <div className="col-md-4 card text-center">
                <h3>Notice your mouse position</h3><br/>
                X-coordinates:-{x}<br/> <br/>
                Y-coordinates:-{y}<br/> <br/>
            </div> 

            <div className="col-md-2"></div>

            </div>

            <div className="fetched">
            <h1>Searching in Fetched Data </h1>
            <input type="value" className="form-control"
            value={id} onChange={e => setId(e.target.value)} placeholder="Id of Post...."/>
            <div className="card-comments">{album.title}</div>
            </div>

            <div className="fetched">
                <h1>Data fetching by useEffect</h1>
                {   loading ?  
                <div className="card-comments text-center">
                    *************Data is Loading***************
                </div> :
                    comments.map(comment => 
                        <div className="card-comments" key={comment.id}>
                            PostId:- {comment.postId}<br/>
                            Name:- {comment.name}<br/>
                            Email:- {comment.email}<br/>
                            Comments:- {comment.body}<br/>
                        </div>
                    ) 
                }
                {
                    CommentsErr ? <div className="card-comments">{CommentsErr}</div> : null
                }
                
            </div>

            
        </div>
    )
}

export default UseEffect
