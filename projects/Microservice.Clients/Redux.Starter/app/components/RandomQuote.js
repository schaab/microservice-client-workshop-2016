import React, {Component, PropTypes} from 'react';
import Quote from './Quote';

export default class RandomQuote extends Component{
    static propTypes = {
        appData: PropTypes.object,
        appActions: PropTypes.object
    };
    componentWillMount(){
        // TODO: call getRandomQuote if we have no randomQuote in appData
    }
    getRandomQuote = () => {
        // TODO: use the appActions creator to get a randomQuote
    };
    render(){
        // TODO: pull appData off props
        return (
            <div className="container-fluid">
                <h2>Random Quote</h2>
                // TODO: Render a quote component with the appData.randomQuote data
                <button className="btn btn-primary" onClick={this.getRandomQuote}>Get Random Quote</button>
            </div>
        );
    }
}
