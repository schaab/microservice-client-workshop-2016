import React, { Component, PropTypes } from 'react';
import Quote from './Quote';
import Loading from './Loading';

export default class QuoteList extends Component{
    static propTypes = {
        appData: PropTypes.object,
        appActions: PropTypes.object
    };
    componentWillMount(){
        // TODO: use the appActionsCreator object to loadQuotes
    }
    render(){
        // TODO: Read quotes from the appData property and assign content to be rendered accordingly

        // TODO: If the quotes are empty, set content to the loading component, otherwise set content to the quote items array

        return (<div className="container-fluid">
            <h2>All Quotes</h2>
            // TODO: Render the content
        </div>);
    }
}
