import React, { Component } from 'react';
// TODO: Import the quote microservice module
// TODO: Import the Quote component

export default class QuoteList extends Component{
    // TODO: Add state that has a property that is an array of quotes
    
    componentWillMount(){
        // Set the uri that will handle microservice requests
        Quote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        Quote.getAll().then((quotes) => {
            
            const items = [];
            // TODO: Iterate over the quote array and push a Quote component onto the items array
            // TODO: Set the quotes stored in state equal to the items
        });
    }
    render(){
        return (<div className="container-fluid">
            <h2>All Quotes</h2>
            <ul className="list-group">
                // TODO: Render the Quotes in the component state
            </ul>
        </div>);
    }
}
