import React, {Component} from 'react';
// TODO: Import quote microservice module
// TODO: Import quote component

export default class RandomQuote extends Component{
    // TODO: Add state to store the current random quote
    componentWillMount(){
        if(!this.state.quote) {
            // TODO: Add call to getRandomQuote method
        }
    }
    getRandomQuote = () => {
        Quote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        Quote.getRandomQuote().then(quote => {
            // TODO: Set the quote property of state to the value that comes back
        });
    };
    render(){
        return (
            <div className="container-fluid">
                <h2>Random Quote</h2>
                // TODO: Render the Quote using the Quote component
                <button className="btn btn-primary" onClick={this.getRandomQuote}>Get Random Quote</button>
            </div>
        );
    }
}
