import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({selectedparagraph,
    timeRemaining,
    timerStarted,
    testInfo
    }) => {

   
console.log('insiide typing challange',testInfo);
    return ( 


        <div className="typing-challenge">

            <div className="timer-container">
                <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">{ !timerStarted &&  "Start typing to start the test"} </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedparagraph} */}
                        {
                            testInfo.map((individualLetterInfo) => {
                                return <div>{individualLetterInfo.testLetter}</div>;
                            })
                        }
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