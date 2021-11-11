import React from "react";
import "./TryAgain.css";

const TryAgain = ({words,characters,wpm}) => {

    return(

        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container">
                <p>
                    <b>charecter:</b> {characters}
                    <b>Word:</b> {words}
                    <b>Speed:</b> {characters}
                </p>
            </div>

            <div>
                <button className="end-button start-again-btn">Retry</button>
                <button className="end-button share-btn" onClick={() => {window.open("https://www.facebook.com/share ")}}>Share</button>
                <button className="end-button tweet-btn">Retry</button>
            </div>
        </div>

    );

}


export default TryAgain;