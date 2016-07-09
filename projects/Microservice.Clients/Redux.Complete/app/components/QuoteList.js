import React, { Component, PropTypes } from 'react';
import Quote from './Quote';
import Loading from './Loading';

export default class QuoteList extends Component{
    static propTypes = {
        appData: PropTypes.object,
        appActions: PropTypes.object
    };
    componentWillMount() {
        this.loadQuotes();
    }
    loadQuotes = () => {
        const {appActions} = this.props;

        appActions.loadQuotes();
    };
    render(){
        const {appData} = this.props;
        const items = [];
        appData.quotes.forEach(quote => {
            const key = `quote_item_${quote.id}`;
            items.push(<li key={key} className="list-group-item">{Quote(quote)}</li>);
    });

    const content = items.length > 0 ? (<ul style={{marginTop: '10px'}} className="list-group">{items}</ul>) : (<div>{Loading('Loading quote list...')}</div>);
    return (<div className="container-fluid">
        <span style={{marginBottom: '5px'}}>
            <button tooltip="Reload Quote List" style={{display: 'inline', verticalAlign: 'middle'}} onClick={this.loadQuotes} className='btn btn-primary'><i className='fa fa-refresh' ></i></button>
            <h2 style={{display: 'inline', verticalAlign: 'middle'}}>All Quotes</h2>
        </span>
        {content}
    </div>);
}
}
