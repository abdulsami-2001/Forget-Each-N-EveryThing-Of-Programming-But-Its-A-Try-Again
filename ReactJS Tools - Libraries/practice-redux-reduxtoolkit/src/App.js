import React from 'react'
import Counter from './Component/Counter/Counter.component'
import './App.css'
import Post from './Component/Posts/Post.component'

const App = () => {
    return (
        <div className="App" >
            <Counter/>
            <hr />
            <Post/>
        </div>
    )
}

export default App
