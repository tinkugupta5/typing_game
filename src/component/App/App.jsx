import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css"; 

const TotalTime = 9;
// const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {

    
    state = {
        selectedparagraph: "my name is tinku gupta",
        timeStarted: false,
        timeRemaining: TotalTime,
        words:170,
        characters:60,
        wpm:20,
        testInfo:[]
    };


    componentDidMount () {
    //     fetch(ServiceUrl)
    //     .then((response) => response.text())   
    //     .then((data) => {
    //          this.setState({ selectedparagraph: data });
    //         console.log(data);
    // });

        const selectedParagraphArray = this.state.selectedparagraph.split("");
        console.log('after fetch ',selectedParagraphArray);
        const testInfo =  selectedParagraphArray.map(selectedLetter => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        this.setState({ testInfo });
    }
    
    render () {

      
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
            testInfo={this.state.testInfo}
            />

            {/* Footer */}
            <Footer/>
           </div>
        );
    }
}

export default App;