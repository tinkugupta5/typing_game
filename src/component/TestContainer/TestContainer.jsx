import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import './TestContainer.css'

const TestContainer = ({selectedparagraph,
    timeStarted,
    timeRemaining,
    words,
    characters,
    wpm,}) => {

        console.log(timeRemaining);
    
    return (

        <div className="test-container">
             {
            timeRemaining > 0 ?(<div data-aos="fade-up" className="typing-challenge-cont">
            <TypingChallengeContainer timeRemaining={timeRemaining} selectedparagraph={selectedparagraph} timeStarted={timeStarted} words={words} characters={characters} wpm={wpm}/>
        </div>) : (
             <div className="try-again-cont">
             <TryAgain words={words} characters={characters} wpm={wpm}   />
         </div>

             )
            }       
           
        </div>
    );
}


export default TestContainer; 