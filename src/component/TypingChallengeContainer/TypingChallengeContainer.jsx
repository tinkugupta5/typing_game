import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";
const TypingChallengeContainer = ({selectedparagraph,
    timeStarted,
    timeRemaining,
    words,
    characters,
    wpm,
    testInfo
}) => {



    return(
        <div className="typing-challenge-container">

            {/* detail section */}

            <div className="details-container">
                {/* words Type */}
                <ChallengeDetailsCard cardName="words" cardValue={words} />
                {/* charecter Type */}
                <ChallengeDetailsCard cardName="characters" cardValue={characters} />
                {/* speed Type */}
                <ChallengeDetailsCard cardName="speed" cardValue={wpm} />                                     
            </div>

             {/* Charecter type */}
            <div className="typewriter-container">
                {/* <TypingChallenge     selectedParagraph="hellow world"/> */}
               <TypingChallenge testInfo={testInfo} wpm={wpm} characters={characters} words={words} timeStarted={timeStarted} timeRemaining={timeRemaining} selectedparagraph={selectedparagraph} testInfo={testInfo} />
             </div>

            {/* Real hallenge */}


        </div>
    );

}

export default TypingChallengeContainer;