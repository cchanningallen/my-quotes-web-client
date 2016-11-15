import { List } from 'immutable';
import uuid from 'node-uuid';
import { combineReducers } from 'redux';
import { getQuotes as makeGetQuotesRequest } from 'lib/util/api';

// Action Types
const ADD_QUOTE = 'ADD_QUOTE';
const REMOVE_QUOTE = 'REMOVE_QUOTE';
const UPDATE_QUOTE = 'UPDATE_QUOTE';
const REQUEST_QUOTES = 'REQUEST_QUOTES';
const RECEIVE_QUOTES = 'RECEIVE_QUOTES';


// Action Creators
export const addQuote = (params) => {
  return { type: ADD_QUOTE, payload: { params } }
};

export const removeQuote = (idx) => {
  return { type: REMOVE_QUOTE, payload: { idx } }
};

export const updateQuote = (idx, params) => {
  return { type: UPDATE_QUOTE, payload: { idx, params } }
};

export const fetchQuotes = () => (dispatch) => {
  dispatch(requestQuotes());

  return makeGetQuotesRequest()
    .then(res => res.json())
    .then((data) => dispatch(receiveQuotes(data)))
};

export const requestQuotes = () => {
  return { type: REQUEST_QUOTES }
};

export const receiveQuotes = (response) => {
  return { type: RECEIVE_QUOTES, payload: response }
};


// Reducers
const DEFAULT_QUOTES = List([
  { content: "Don't live with broken windows", author: "The Pragmatic Progammer" },
  { content: "Be a catalyst for change", author: "The Pragmatic Progammer" },
  { content: "Keep an eye on the big picture", author: "The Pragmatic Progammer" },
  { content: "Know when to stop", author: "The Pragmatic Progammer" },
  { content: "Think carefully about *everything*", author: "The Pragmatic Progammer" },
  { content: "It's both *what* you say and *when* you say it", author: "The Pragmatic Progammer" },
  { content: "Make your code easy to reuse", author: "The Pragmatic Progammer" },
  { content: "Move fast and break things", author: "Mark Zuckerberg" },
  { content: "Life starts outside your comfort zone" }
]);

const data = (state = DEFAULT_QUOTES, { type, payload }) => {
  switch (type) {
    case ADD_QUOTE:
      return state.push({ _id: uuid.v1(), ...payload.params });

    case REMOVE_QUOTE:
      return state.remove(payload.idx);

    case UPDATE_QUOTE:
      return state.update(payload.idx, val => ({ ...val, ...payload.params }));

    case RECEIVE_QUOTES:
      return List(payload.quotes);

    default:
      return state;
  }
};

const isLoading = (state = false, { type, payload }) => {
  switch (type) {
    case REQUEST_QUOTES:
      return true;

    case RECEIVE_QUOTES:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  data,
  isLoading
})

// Selectors
export const getQuotes = (state) => state.quotes.data;
export const getQuotesLoading = (state) => state.quotes.isLoading;
