import * as AppActionTypes from '../actionTypes/App';
import QuoteServiceProxy from '../common/js/forge/services/quote';

export function loadQuotes() {
    return (dispatch) => {
        // TODO: Dispatch LOADING_QUOTES

        QuoteServiceProxy.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        QuoteServiceProxy.getAll().then(quotes => {
            // TODO: Dispatch LOADED_QUOTES
        });
    };
}

export function getRandomQuote() {
    return (dispatch) => {
        // TODO: Dispatch LOADING_RANDOM_QUOTE
        
        QuoteServiceProxy.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        QuoteServiceProxy.getRandomQuote()
            .then(quote => /* TODO: Dispatch LOADED_RANDOM_QUOTE */);
    };
}
