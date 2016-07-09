import * as AppActionTypes from '../actionTypes/App';
import QuoteServiceProxy from '../common/js/forge/services/quote';

export function loadQuotes() {
    return (dispatch) => {
        dispatch({type: AppActionTypes.LOADING_QUOTES});
        QuoteServiceProxy.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        QuoteServiceProxy.getAll().then(quotes => {
           dispatch({type: AppActionTypes.LOADED_QUOTES, data: quotes});
        });
    };
}

export function getRandomQuote() {
    return (dispatch) => {
        dispatch({type: AppActionTypes.LOADING_RANDOM_QUOTE});
        QuoteServiceProxy.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        QuoteServiceProxy.getRandomQuote()
            .then(quote => dispatch({type: AppActionTypes.LOADED_RANDOM_QUOTE, data: quote}));
    };
}
