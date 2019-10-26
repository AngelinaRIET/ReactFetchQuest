import React from 'react';


const DisplayQuote = ({ simpsonsQuote }) => {
    return (
        <div className="DisplayEmployee">

            <img src={simpsonsQuote.image} alt="simpsons" />
            <ul>

                <li>
                    Name : {simpsonsQuote.character}
                </li>
                <li>
                    Quote : {simpsonsQuote.quote}
                </li>

            </ul>

        </div>
    );
};

export default DisplayQuote;
