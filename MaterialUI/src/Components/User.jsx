import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from '../Quote/Quote';

function User() {
    let [quotes, setQuotes] = useState([]);

    async function getQuotes() {
        let res = await axios.get('http://localhost:8080/allquotes');
        // console.log(res.data);
        setQuotes(res.data);
    }

    useEffect(() => {
        getQuotes();

    }, []);

    return (
        <div>
            <h2>All </h2>
            <ul>
                {quotes.map((quote, index) => {
                    return <Quote
                        key={index}
                        author={quote.author}
                        text={quote.text}
                        id={quote._id} />;
                })}
            </ul>
        </div>
    );
}

export default User