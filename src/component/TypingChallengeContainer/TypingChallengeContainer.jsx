import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";
const TypingChallengeContainer = ({words,characters,wpm}) => {

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
               <TypingChallenge selectedParagraph="hellow world" />
             </div>

            {/* Real hallenge */}


        </div>
    );

}

export default TypingChallengeContainer;