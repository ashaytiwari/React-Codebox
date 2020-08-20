import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: "",
             title: "", 
             body: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {userId, title, body} = this.state
        return (
            <div className="form">
                <form onSubmit={this.submitHandler} className="container"> 
                <h2>Update Record</h2>
                    <div className="form-group">
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} placeholder="UserId"/> <br/>   
                    </div> 
                    <div className="form-group">
                        <input type="text" name="title" value={title} onChange={this.changeHandler} placeholder="Title"/>  <br/>   
                    </div> 
                    <div className="form-group">
                        <input type="text" name="body" value={body} onChange={this.changeHandler} placeholder="Body"/>     <br/>
                    </div> 
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm

