import React, {Component, PropTypes} from 'react';
import Quote from './Quote';

export default class RandomQuote extends Component{
    static propTypes = {
        appData: PropTypes.object,
        appActions: PropTypes.object
    };
    componentWillMount(){
        const {appData} = this.props;
        if(!appData.randomQuote) {
            this.getRandomQuote();
        }
    }
    getRandomQuote = () => {
        const {appActions} = this.props;
        appActions.getRandomQuote();
    };
    render(){
        const {appData} = this.props;
        return (
            <div className="container-fluid">
                <h2>Random Quote</h2>
                {Quote(appData.randomQuote)}
                <button className="btn btn-primary" onClick={this.getRandomQuote}>Get Random Quote</button>
            </div>
        );
    }
}
