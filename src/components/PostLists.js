import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './PostForm'

class PostLists extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                error: 'Error retrieving data'
            })
        })
    }
    
    render() {
        const {posts, error} = this.state
        return (
            <div className="ajax text-center">
                <h2>AJAX Requesting</h2>
                <div className="image">
                    <PostForm />
                </div>
                <h3>Fetched Data</h3>
                {
                    posts.length ? 
                    posts.map(post => 
                    <div key={post.id} className="post-card text-center">
                        <h4>Post-Info</h4>
                        <strong>UserId:-</strong> {post.userId} <br/>
                        <strong>Title:-</strong> {post.title} <br/>
                        <strong>Body:-</strong> {post.body} <br/>
                    </div>) : 
                    null
                }
                {
                    error ? <div className="post-card text-center">{error}</div> : null 
                }
                {/* <PostForm />
                <h1>Lists of Posts</h1>
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) : 
                    null
                }
                {
                    error ? <div>{error}</div> : null 
                } */}
                
            </div>
        )
    }
}


export default PostLists
