import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css"; 

const TotalTime = 9;
const Serviceurl = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {

    
    state = {
        selectedparagraph :"hellow world",
        timeStarted: false,
        timeRemaining: TotalTime,
        words:170,
        characters:60,
        wpm:20,
    };

   

    render () {

        fetch(Serviceurl)
  .then(response => response.text())
  .then((information) => {
      console.log("API RESPONSE IS" , information)
  });
  console.log(Serviceurl);
        
        return(
           <div className="app">
            {/* Navbar Section */}
            <Nav/>
            {/* Landing Page */}
           <Landing/>
            {/* Challenge Section */}
            <ChallengeSection
            selectedparagraph={this.state.selectedparagraph}
            words={this.state.words}
            characters={this.state.characters}
            wpm={this.state.wpm}
            timeRemaining={this.state.timeRemaining}
            timeStarted={this.state.timeStarted}
            />

            {/* Footer */}
            <Footer/>
           </div>
        );
    }
}

export default App;