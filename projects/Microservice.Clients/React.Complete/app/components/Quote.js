import React, { PropTypes } from 'react';

const Quote = (quote) =>
{
    const quoteText = `"${quote ? quote.text : ""}"`
    const quoteAuthor = `- ${quote ? quote.author : ""}`
    return (<div className="well well-sm"><p>{quoteText}</p><p><i>{quoteAuthor}</i></p></div>);
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default Quote;
