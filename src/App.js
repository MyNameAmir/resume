// App.js
import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            commentSuccessMessage: ""
        }

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    handleCommentChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleCommentSubmit(event) {
        event.preventDefault();
        let newComment = {
            comment: this.state.comment
        }

        axios.post('/amirComments', newComment).then((result) => {
            console.log("this is happening")

        })
            .catch(error => { this.setState({ commentSuccessMessage: `comment was not submitted due to ${error}` }) });

        this.setState({
            comment: '',
            commentSuccessMessage: 'comment was successfully submitted!'
        })

    }

    render() {
        return <>
            <div className="wrapper">
                <div id="navigation">
                    <ul className="nav">
                        <li><a href="#top">home</a></li>
                        <li><a href="#about">about me</a></li>
                        <li><a href="#work">my work</a></li>
                        <li><a href="#future">future</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
                <div id="everythingElse">
                    <div className="intro">
                        <div id="restOfIntro">
                            <img className="circularImage" width="120px" height="120px" src="amir.png" alt="main image" />
                            <h1 id="top"> 🌠🖥 Amir Moin ⌨️📱 </h1>
                        </div>
                    </div>
                    <h2 id="about"><strong><i>A</i></strong> little bit about myself</h2>
                    <p className="para"><strong>Greetings</strong> weary traveller, welcome to my page! 😊 My name is Amirali Moin, and I consider myself to be an avid learner!
            I can, with full confidence, say that I am a hard working person who pays attention to detail. I love to code and make websites and it was something
            that started as a hobby for me and I want to pursue it professionally. I am most knowledgable in front end web development using <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong> and <strong>React</strong>,
            but also good at backend languages such as <strong>Node.js</strong> and good with database web dev usage such as MongoDB. I am also very good at Java programming. Just to add one more thing here, I am an avid follower of soccer and I have been playing the
            game since I was 6 years old! and I do not plan on stopping until much much later into my life. </p>
                    <img className="linearImage" width="100%" src="image1.png" alt="image" />
                    <h2 id="work"><strong><i>A</i></strong> little bit about my previous work</h2>
                    <p className="para"><strong>As</strong> I previously mentioned, I have worked with HTML, CSS, JS, React framework and Node.js. and with those tools I have created
            2 projects and this exact page you are on. The first project I would like to show you is the <a className="inParagraphA" href="http://travellinglog.herokuapp.com/" target="_blank">travellinglog</a> where
            you can access this single page app and talk about the countries you have visited and upload images of the place you have been to so you can showcase to the world. It is
            very simple to use and I would like you to have a look at it for yourself! It is made with Node.js as the back end, and a react front end with mongoDB database access to store comments and images.</p>
                    <img className="linearImage" width="100%" src="image5.png" alt="image" />
                    <p className="para"><strong>Second</strong> work I would like to talk to you about is my <a className="inParagraphA" href="https://wallgraffiti.herokuapp.com/" target="_blank">wallgrafitti</a> page. This
            single page app also uses Node.js as the back end and a react framework for the front end with MongoDB database capabilities. The purpose of this app is to have a blank canvas at the start and to have the
            visitors of the page leave comments on the wall with various fonts and sizes and colours (just like how you would grafitti on a wall, but legal this time!). I hope you
            enjoyed my work so far!</p>
                    <img className="linearImage" width="100%" src="image2.png" alt="image" />

                    <p className="para"><strong>Third</strong> work I would like to talk to you about is my <a className="inParagraphA" href="https://tasks-manager2.herokuapp.com/" target="_blank">task manager</a> page. This
            single page app also uses Node.js as the back end and a react framework for the front end with bootstrap as the main styling component. The purpose of this app is that the users
            can manage and track any tasks that they encounter daily and each user can manage their own persons on this app and assign tasks to them. And you can remove tasks on this app
            once a task is achieved.</p>
                    <img className="linearImage" width="100%" src="image6.png" alt="image" />
                    <h2 id="future"><strong><i>A</i></strong> little bit about my future prospects</h2>
                    <p className="para">In the near future I hope to be able to find work as a web developer, if it is front-end, back-end or full-stack. Having worked in the educational
            field of development and computer science, I am eager to make the jump to complete work in the industry. My goal as always is to learn more and more and by getting employed and being in an all web development setting would be ideal to me as I am passionate
            about web development and programming. I would also love to connect with others passionate about everything web dev so if you are also
            a web dev head like me, connect with me through my links in the <a className="inParagraphA" href="#contact">contact</a> section. Would love to meet more people and network!</p>
                    <img className="linearImage" width="100%" src="image3.png" alt="image" />
                    <h2 id="contact"><strong><i>Ways</i></strong> to contact me</h2>
                    <p className="para" id="footerP"> you can contact me on these amazing platforms or leave a comment down below: </p>
                    <a href="https://www.instagram.com/ameer.ca/" target="_blank"><img className="circularImage" width="64px" src="icon1.png" alt="image" /></a>
                    <a href="https://www.linkedin.com/in/amirali-moin-74b285138/" target="_blank"><img className="circularImage" width="64px" src="icon2.png" alt="image" /></a>
                    <a href="https://www.twitter.com/bornoncanadaday/" target="_blank"><img className="circularImage" width="64px" src="icon3.png" alt="image" /></a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <form onSubmit={this.handleCommentSubmit}>

                        <label> Submit a comment: </label>
                        <br></br>
                        <textarea className="comment" placeholder="type any comment here..." onChange={this.handleCommentChange} value={this.state.comment} name="comment" cols="40"></textarea>
                        <br></br>
                        <input className="SubmitButton" type='submit' value='Submit comment' />
                    </form>
                    <h3>{this.state.commentSuccessMessage}</h3>
                    <footer><p className="footer">&copy;Amirali Moin 2022 Creation. all rights reserved. </p></footer>
                </div>
            </div>
        </>;
    }
}

export default App;
