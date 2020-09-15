// App.js
import React from 'react';


// Random facts About Numbers App
class App extends React.Component {
    // event handler for choosing a number
   
    render() {
        return <>
        <div className = "wrapper">
            <img className = "circularImage" width = "120px" height = "120px" src = "amir.png" alt = "main image"/>
            <h1 id = "top"> 🌠🖥 Hi my name is amir &amp; I love Web Development! ⌨️📱 </h1>
            <ul className = "nav">
                <li><a href = "#top">home</a></li>
                <li><a href = "#about">about me</a></li>
                <li><a href = "#work">my work</a></li>
                <li><a href = "#future">future</a></li>
                <li> <a href = "#contact">contact</a></li>
            </ul>
            <h2 id = "about"><strong><i>A</i></strong> little bit about myself</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien ligula, eleifend in interdum vel, eleifend at ante. Suspendisse sit amet convallis nulla. Nullam nec orci non orci laoreet tristique. Etiam tortor est, egestas rhoncus elementum at, ornare vitae tortor. Nam nisl risus, tempor in euismod id, tempor at nulla. Morbi a orci eu neque molestie sagittis. Morbi rutrum ac massa eget ultrices. Cras sed fringilla orci, tempus tristique ligula. </p>
            <img className = "linearImage" width = "100%" src = "image1.png" alt = "image" />
            <h2 id = "work"><strong><i>A</i></strong> little bit about my previous work</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien ligula, eleifend in interdum vel, eleifend at ante. Suspendisse sit amet convallis nulla. Nullam nec orci non orci laoreet tristique. Etiam tortor est, egestas rhoncus elementum at, ornare vitae tortor. Nam nisl risus, tempor in euismod id, tempor at nulla. Morbi a orci eu neque molestie sagittis. Morbi rutrum ac massa eget ultrices. Cras sed fringilla orci, tempus tristique ligula. </p>
            <img className = "linearImage" width = "100%" src = "image2.png" alt = "image" />
            <h2 id = "future"><strong><i>A</i></strong> little bit about my future prospects</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien ligula, eleifend in interdum vel, eleifend at ante. Suspendisse sit amet convallis nulla. Nullam nec orci non orci laoreet tristique. Etiam tortor est, egestas rhoncus elementum at, ornare vitae tortor. Nam nisl risus, tempor in euismod id, tempor at nulla. Morbi a orci eu neque molestie sagittis. Morbi rutrum ac massa eget ultrices. Cras sed fringilla orci, tempus tristique ligula. </p>
            <img className = "linearImage" width = "100%" src = "image3.png" alt = "image" />
            <h2 id = "contact"><strong><i>Ways</i></strong> to contact me</h2>
            <p> you can contact me on these amazing platforms: </p>
            <img className = "linearImage" width  = "100%" src = "image4.png" alt = "image" />
        </div>
        </>;
    }
}

export default App;