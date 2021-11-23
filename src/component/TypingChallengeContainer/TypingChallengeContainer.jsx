import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import "./TypingChallengeContainer.css";
const TypingChallengeContainer = ({word ,characters, wpm}) => {

    return(
        <div className="typing-challenge-container">

            {/* detail section */}

            <div className="details-container">
                {/* words Type */}
                <ChallengeDetailsCard cardName="word" cardValue="words" />
                {/* charecter Type */}
                <ChallengeDetailsCard cardName="characters" cardValue="characters" />
                {/* speed Type */}
                <ChallengeDetailsCard cardName="speed" cardValue="wpm" />
                
                {/* Charecter type */}
                <div className="typewriter-container">
                
                </div>
                {/* speed*/}
            </div>

            {/* Real hallenge */}


        </div>
    );

}

export default TypingChallengeContainer;