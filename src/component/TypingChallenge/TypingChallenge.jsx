import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({selectedparagraph,
    timeRemaining,
    }) => {

   
console.log(timeRemaining);
    return ( 


        <div className="typing-challenge">

            <div className="timer-container">
                <p className="timer">00:{timeRemaining}</p>
                <p className="timer">Start typing to start the test</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {selectedparagraph}
                    </div>
                </div>
                <div className="textarea-right">
                <textarea className="textarea" >
                                          
                </textarea>
                </div>
            </div>

        </div>
     );
}


export default TypingChallenge;